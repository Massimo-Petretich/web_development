let initializeToc = () => {
    let toc = document.createElement("div");
    let title = document.createElement("h2")
    title.append("Sections")
    toc.append(title)
    toc.id = "TOC"
    let body = document.querySelector('body')
    body.prepend(toc)
    return toc
}

let findIdx = (arr, element) => (
    arr
        .map((val, idx) => (val === element) && idx)
        .filter((val) => (typeof val) == 'number')
    [0]
)

let resetHigherIdxs = (arr, idx) => {
    for (let i = idx + 1; i < arr.length; i++) {
        arr[i] = 0
    }
}

let generateHeadingCode = (arr) => arr.filter(val => val > 0).join('.')

let wrapInATagWithId = (element, id) => {
    let a = document.createElement('a')
    a.id = id
    element.before(a)
    a.append(element)
}

let generateATocEntry = (heading, id) => {
    let a = document.createElement('a')
    a.href = `#${id}`
    a.append(heading.textContent)
    return a
}

let wrapInDivTagWithClass = (element, nodeClass) => {
    let div = document.createElement('div')
    div.classList.add('TOC', nodeClass)
    div.append(element)
    return div
}

let generateToc = (event, headingCodeSeparator = ' | ') => {
    if (document.querySelector("#TOC"))
        return null

    let headingTypes = ['h2', 'h3', 'h4', 'h5', 'h6']
    let headings = document.querySelectorAll(headingTypes.join(','))
    let headingCounts = Array(headingTypes.length).fill(0)

    let toc = initializeToc()

    for (let heading of headings) {
        let headingName = heading.tagName.toLowerCase()
        let headingLevel = parseInt(Array(...headingName)[1])
        let headingTypeIdx = findIdx(headingTypes, headingName)
        headingCounts[headingTypeIdx]++
        resetHigherIdxs(headingCounts, headingTypeIdx)

        let headingCode = generateHeadingCode(headingCounts)
        heading.prepend(headingCodeSeparator)
        heading.prepend(headingCode)
        wrapInATagWithId(heading, headingCode)
        let tocEntry = generateATocEntry(heading, headingCode)
        let headingClass = `TOC_${headingName}`
        tocEntry = wrapInDivTagWithClass(tocEntry, headingClass)
        toc.append(tocEntry)
        console.log(headingCounts, headingCode, heading.parentNode, tocEntry)
    }
}

document.addEventListener("DOMContentLoaded", generateToc)