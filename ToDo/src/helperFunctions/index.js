function getStatus(startingDate, endDate) {

    const now = new Date()
    const today = now.getDate()
        // console.log(today)
    const thisMonth = now.getMonth() + 1
        // console.log(thisMonth)
    const startArr = startingDate.split("-")
    const startMonth = Number(startArr[1])
    const startDay = Number(startArr[2])
        // console.log(startMonth)
        // console.log(startDay)
    const endArr = endDate.split("-")
    const endMonth = Number(endArr[1])
    const endDay = Number(endArr[2])
        // console.log(endMonth)
        // console.log(endDay)

    if (thisMonth >= startMonth && thisMonth <= endMonth) {
        if (today >= startDay && today <= endDay) {
            console.log("the status is active now")

            return 'active';

        }
    }
    if (thisMonth < startMonth) {
        console.log("upcoming")

        return 'upcoming'

    }
    if (thisMonth >= endMonth && today > endDay) {
        console.log("the status is pending now")

        return 'pending'
    } else {
        console.log("upcoming")
        return 'upcoming'
    }

}

function saveDataToLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function updateData(id) {

    let tasks = getData()
    const taskToUpdate = tasks.find(task => task.id == id)
    if (!taskToUpdate) {
        console.error('Task not found');
        return;
    }
    if (taskToUpdate.status === "complete") {
        const status = getStatus(taskToUpdate.startDate, taskToUpdate.endDate)
        taskToUpdate.status = status;
    } else {
        taskToUpdate.status = 'complete'
    }
    // console.log('task before update', taskToUpdate)
    // const updatedTask = {...taskToUpdate, status: 'complete' }
    // console.log('task after update', updatedTask)
    // tasks = tasks.map(task => task.id !== id ? task : updatedTask)
    tasks = tasks.filter(task => task.id !== id);
    tasks.push(taskToUpdate)

    console.log('data for update', tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    console.log("after update", localStorage.getItem('tasks'))
    return tasks;
}

function deleteData(id) {
    let tasks = getData()
    console.log("before delete", tasks)

    tasks = tasks.filter(task => task.id !== id);
    console.log("after delete", tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return tasks


}

function getData() {
    // return JSON.parse(localStorage.getItem('tasks'))
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    return tasks
}
export default { getStatus, saveDataToLocalStorage, getData, updateData, deleteData }