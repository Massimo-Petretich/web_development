

function asyncTask(delay, success) {
    function promiseHandler(resolve, reject) {
        function timeoutHander() {
            if (success) {
                resolve('Data fetched successfully');
            } else {
                reject('Failed to fetch data');
            }
        }
        setTimeout(timeoutHander, delay)
    }

    let p = new Promise(promiseHandler)
    return p
}

asyncTask(2000, false)
    .then(result => {console.log('Success:', result)})
    .catch(error => {console.error('Error:', error);})


function delayExecution(delay) {
    function promiseHandler(resolve) {
        let time = Date.now()
        let timeoutHander = () => resolve(time)
        setTimeout(timeoutHander, delay)
    }
    let p = new Promise(promiseHandler)
    return p
}

delayExecution(3000)
    .then(response => console.log(new Date(response)))
    .then(() => delayExecution(2000))
    .then(response => console.log(new Date(response)))


(new Promise(resolve => resolve([Date.now(), 'hello'])))
    .then(response => {
        console.log(response[0], response[1])
        return [response[0]+1, response[1]+' world']
    })
    .then(response => {
        console.log(response[0], response[1])
        return [response[0]+1, response[1]+' again']
    })
    .then(response => {
        console.log(response[0], response[1])
    })