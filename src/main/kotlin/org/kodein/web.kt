package org.kodein

import org.w3c.dom.*
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.addClass
import kotlin.dom.removeClass
import kotlin.math.max

@Suppress("unused")
fun main(args: Array<String>) {
    window.onload = { main() }
}

fun main() {
    val body = document.body!!

    val headerDiv = document.querySelector("div#header")!! as HTMLElement
    val headerLogoDiv = document.querySelector("div#header div.logo")!! as HTMLElement
    val headerLogoImg = document.querySelector("div#header div.logo img.logo-img")!! as HTMLElement
    val headerTitle = document.querySelector("div#header div.logo h1")!! as HTMLElement
    val headerSubtitle = document.querySelector("div#header div.logo h2")!! as HTMLElement

    var headerIsSmall = false
    fun setHeaderPos(isFirst: Boolean = false) {
        if (isFirst || body.scrollTop < 585 || headerDiv.style.height != "40px") {
            val height = max(40, 585 - body.scrollTop.toInt())
            headerDiv.style.height = "${height}px"
            val scroll = 585 - height
            headerDiv.style.backgroundPosition = "center ${-(scroll / 2.9)}px"

            if (height <= 165 && !headerIsSmall) {
                headerIsSmall = true
                if (!isFirst) {
                    headerLogoDiv.addClass("transition")
                    headerLogoImg.addClass("transition")
                    headerTitle.addClass("transition")
                    headerSubtitle.addClass("transition")
                }
                headerDiv.addClass("small")
            }
            else if (height > 165 && headerIsSmall) {
                headerIsSmall = false
                if (!isFirst) {
                    headerLogoDiv.addClass("transition")
                    headerLogoImg.addClass("transition")
                    headerTitle.addClass("transition")
                    headerSubtitle.addClass("transition")
                }
                headerDiv.removeClass("small")
            }
        }
    }

    setHeaderPos(true)


    val platformsDiv = document.querySelector("div#platforms")!! as HTMLElement

    fun setPlatformsPos() {
        if (body.scrollTop < 585 * 2) {
            platformsDiv.style.bottom = "calc(3em - ${body.scrollTop / 4.5}px)"
        }
    }

    setPlatformsPos()


    val footerDiv = document.querySelector("div#footer")!! as HTMLElement
    val footerLogoDiv = document.querySelector("div#footer div.logo")!! as HTMLElement
    val footerLogoImg = document.querySelector("div#footer div.logo img.logo-img")!! as HTMLElement
    val footerTitle = document.querySelector("div#footer div.logo h1")!! as HTMLElement
    val footerSubtitle = document.querySelector("div#footer div.logo h2")!! as HTMLElement
    val footerShadowDiv = document.querySelector("span#footer-shadow")!! as HTMLElement

    var footerIsSmall = true
    fun setFooterPos(isFirst: Boolean = false) {
//        if (isFirst || body.scrollTop < 585 || headerDiv.style.height != "40px") {
        val startScroll = footerShadowDiv.offsetTop - window.innerHeight

        val height = max(30, (body.scrollTop - startScroll).toInt())
        footerDiv.style.height = "${height}px"

        if (height <= 120 && !footerIsSmall) {
            footerIsSmall = true
            if (!isFirst) {
                footerLogoDiv.addClass("transition")
                footerLogoImg.addClass("transition")
                footerTitle.addClass("transition")
                footerSubtitle.addClass("transition")
            }
            footerDiv.addClass("small")
        }
        else if (height > 120 && footerIsSmall) {
            footerIsSmall = false
            if (!isFirst) {
                footerLogoDiv.addClass("transition")
                footerLogoImg.addClass("transition")
                footerTitle.addClass("transition")
                footerSubtitle.addClass("transition")
            }
            footerDiv.removeClass("small")
        }
//        }
    }

    setFooterPos(true)


    val builtBy = document.querySelector("div#footer h3")!! as HTMLElement

    fun setbuiltByPos() {
        val startScroll = footerShadowDiv.offsetTop - window.innerHeight
        if (body.scrollTop > startScroll - 350 * 2) {
            val delta = body.scrollTop - startScroll - 350
            builtBy.style.top = "calc(1.5em + ${delta / 3.5}px)"
        }
    }

    setbuiltByPos()


    document.onscroll = {
        setHeaderPos()
        setPlatformsPos()
        setFooterPos()
        setbuiltByPos()
    }

    @Suppress("UNCHECKED_CAST")
    val anchors = document.querySelectorAll("a.goto").asList().map {
        it as HTMLAnchorElement
        val id = it.href.substringAfter('#')
        if (id.isBlank()) {
            it to { 200.0 }
        }
        else {
            val anchor = document.getElementById(id) as HTMLElement
            it to { anchor.offsetTop.toDouble() - 60.0 }
        }
    }

    anchors.forEach { (el, offset) ->
        el.onclick = {
            window.scrollTo(ScrollToOptions(0.0, offset(), ScrollBehavior.SMOOTH))
            false
        }
    }

    val strip = document.querySelector("div#strip") as HTMLElement
    strip.style.display = "block"

    fun checkOffset() {
        if (footerShadowDiv.offsetTop != 0) {
            setFooterPos()
            setbuiltByPos()
        }
        else {
            window.setTimeout({ checkOffset() }, 1)
        }
    }
    checkOffset()
}
