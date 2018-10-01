package org.kodein

import org.w3c.dom.*
import org.w3c.dom.events.Event
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.addClass
import kotlin.dom.createElement
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

    val headerMaxHeight = headerDiv.dataset["height"]?.toInt() ?: 585

    var headerIsSmall = false
    fun setHeaderPos(isFirst: Boolean = false) {
        if (isFirst || body.scrollTop < headerMaxHeight || headerDiv.style.height != "40px") {
            val height = max(40, headerMaxHeight - body.scrollTop.toInt())
            headerDiv.style.height = "${height}px"
            val scroll = headerMaxHeight - height
            headerDiv.style.backgroundPosition = "left ${-(scroll / 2.9)}px"

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


    val platformsDiv = document.querySelector("div#platforms") as? HTMLElement

    fun setPlatformsPos() {
        if (platformsDiv != null && body.scrollTop < 585 * 2) {
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


    fun setAllPos() {
        setHeaderPos()
        setPlatformsPos()
        setFooterPos()
        setbuiltByPos()
    }

    document.onscroll = { setAllPos() }

    @Suppress("UNCHECKED_CAST")
    val anchors = document.querySelectorAll("a.goto").asList().map {
        it as HTMLAnchorElement
        val id = it.href.substringAfter('#')
        if (id.isBlank()) {
            it to { (headerMaxHeight / 3).toDouble() }
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

    document.getElementsByTagName("code").asList().forEach {
        it.textContent = it.textContent?.trimIndent()
        window["hljs"].highlightBlock(it)
        Unit
    }

    document.getElementsByClassName("choices").asList().forEach { cont ->
        val tabs = document.createElement("div") as HTMLDivElement
        tabs.addClass("tabs")
        val choices = cont.getElementsByClassName("choice").asList() as List<HTMLElement>
        choices.forEachIndexed { i, choice ->
            choice as HTMLDivElement
            if (i > 0)
                choice.style.display = "none"
            val title = choice.getElementsByTagName("h3")[0]!! as HTMLElement
            tabs.append(title)
            title.addEventListener("click", {
                choices.forEach { it.style.display = "none" }
                choice.style.display = "flex"
                tabs.children.asList().forEach { it.removeClass("selected") }
                title.addClass("selected")
                setAllPos()
            })
        }
        (tabs.firstChild!! as HTMLElement).addClass("selected")
        cont.prepend(tabs)
    }

}
