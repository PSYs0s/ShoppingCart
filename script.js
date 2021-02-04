//handler for product increase
document.getElementById("caseIncrease").addEventListener("click", function () {
    handleProductChange(true, "caseCount", "caseTotal")
})
//handler for product decrease
document.getElementById("caseDecrease").addEventListener("click", function () {
    handleProductChange(false, "caseCount", "caseTotal")
})
//handler for phone increase
document.getElementById("phoneIncrease").addEventListener("click", function () {
    handleProductChange(true, "phoneCount", "phoneTotal")
})
//handler for phone decrease
document.getElementById("phoneDecrease").addEventListener("click", function () {
    handleProductChange(false, "phoneCount", "phoneTotal")
})
//working process for product
function handleProductChange(isCrease, idForCount, idForTotal) {
    const productCount = getInput(idForCount)
    let productNewCount = productCount
    if (isCrease == true) {
        productNewCount = productCount + 1
    }
    else if (isCrease == false && productCount > 0) {
        productNewCount = productCount - 1
    }
    document.getElementById(idForCount).value = productNewCount
    let productTotal = 0
    if (idForCount == "caseCount" && idForTotal == "caseTotal") {
        productTotal = productNewCount * 59
    }
    else if (idForCount == "phoneCount" && idForTotal == "phoneTotal") {
        productTotal = productNewCount * 1219
    }
    document.getElementById(idForTotal).innerText = "$" + productTotal
    calculateTotal()
}
function calculateTotal() {
    const phoneCount = getInput("phoneCount")
    const caseCount = getInput("caseCount")
    const totalPrice = (phoneCount * 1219) + (caseCount * 59)
    document.getElementById("subTotalPrice").innerText = "$" + totalPrice
    const taxAmount = Math.round(totalPrice * 0.1)
    document.getElementById("tax").innerText = "$" + taxAmount

    document.getElementById("totalPrice").innerText = "$" + (totalPrice + taxAmount)

}
function getInput(id) {
    const productInput = document.getElementById(id)
    const productCount = parseInt(productInput.value)
    return productCount
}