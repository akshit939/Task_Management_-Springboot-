//navbar color change
let register = document.getElementById("register")
let home = document.getElementById("home")
let login = document.getElementById("login")



let page = document.getElementsByClassName("page")[0]




register.addEventListener("click", () => {

    page.setAttribute("class", "page")



    register.style.backgroundColor = "white"
    register.style.color = "black"
    page.setAttribute("class", "page")
    home.style.backgroundColor = "black"
    home.style.color = "white"
    login.style.backgroundColor = "black"
    login.style.color = "white"
    page.innerHTML = ""
    page.innerHTML = `<form class="registerform"  method="post">
            <div>
                <label>Enter UserID</label>
                <input id="useridforregister" type="text" required>
                <p></p>
            </div>
            <div>
                <label>Enter Email</label>
                <input id="emailforregister" type="text" required>
                
            </div>
            <div>
                <label>Enter Password</label>
                <input id="passorg" type="password" required>
                <p id="pass8">Minimum 8 character</p>
            </div>
            <div>
                <label>Confirm Password</label>
                <input id="confirmpass" type="password" required>
                <p id="matched"></p>
            </div>
            <div id="registerhide">
                <input id="register12" type="submit" value="Register" >
            </div>
        </form>`


    //min pass 8
    document.getElementById("passorg").addEventListener("input", () => {
        let pass1len = document.getElementById("passorg").value
        if (pass1len.length >= 8) {
            document.getElementById("pass8").innerText = "Great, the password is >= 8 characters";
            document.getElementById("pass8").style.color = "green";
        } else {
            document.getElementById("pass8").innerText = "Minimum 8 characters";
            document.getElementById("pass8").style.color = "red";
        }
    })

    //cnfrm pass validation

    document.getElementById("registerhide").hidden = true
    document.getElementById("confirmpass").addEventListener("input", () => {
        let passorg = document.getElementById("passorg").value;
        let confirmpass = document.getElementById("confirmpass").value;
        if (passorg === confirmpass) {
            document.getElementById("matched").innerText = "Passwords match";
            document.getElementById("matched").style.color = "green";
            document.getElementById("registerhide").hidden = false
        }


        else {
            document.getElementById("matched").innerText = "Passwords do not match";
            document.getElementById("matched").style.color = "red";
        }



    })






    //login form validaton
    document.getElementById("register12").addEventListener("click", (e) => {
        e.preventDefault()
        const url = "http://localhost:8080/register";

        const data = {
            userid: document.getElementById("useridforregister").value,
            email: document.getElementById("emailforregister").value,
            password: document.getElementById("passorg").value,
            pendingtask: [],
            completedtask: []
        };

        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            let x = res.json()
            x.then((e) => {
                console.log(e)
                if (e == 200) {
                    page.innerHTML = ""
                    page.innerHTML = `<h3>Registered Sucessfully Please go to login page </h3>`
                } else {
                    page.innerHTML = ""
                    page.innerHTML = "<h3>User Already exist retry </h3>"
                }
            })


        })

    }
    )
    home.addEventListener("click", () => {
        page.innerHTML = ""
        page.innerHTML = `  <h1>This is tsk management home page
    
            </h1>`

    })

})
//homepage under work
home.addEventListener("click", () => {
    page.innerHTML = `<div class="pagename"><h2>Task Management</h2></div>
    
        <div class="content1">
            <p>Task management is crucial for maintaining productivity and organization in both personal and professional settings. It involves planning, prioritizing, and tracking tasks to ensure timely and efficient completion. Effective task management helps in setting clear goals, breaking down complex projects into manageable parts, and allocating resources efficiently. Utilizing tools like to-do lists, calendars, and task management apps can enhance this process by providing structure and reminders. Regularly reviewing and adjusting tasks based on progress and changing priorities ensures flexibility and adaptability. Ultimately, good task management reduces stress, improves focus, and leads to better outcomes and higher productivity.</p>
            <img src="img/ss1.png" alt="">

        </div>
        <div class="content2">
            <p></p>
            <img src="" alt="">
        </div>
        <div class="madewith"><img src="" alt=""></div>
       
        `


    home.style.backgroundColor = "white"
    home.style.color = "black"

    login.style.backgroundColor = "black"
    login.style.color = "white"
    register.style.backgroundColor = "black"
    register.style.color = "white"
    page.innerHTML = ""
})



login.addEventListener("click", () => {
    page.setAttribute("class", "page")
    login.style.backgroundColor = "white"
    login.style.color = "black"

    register.style.backgroundColor = "black"
    register.style.color = "white"
    home.style.backgroundColor = "black"
    home.style.color = "white"
    page.innerHTML = ""

    page.innerHTML = `<div class="loginform">
            <form method="post">
                <div class="email1">
                    <label>Email</label>
                    <input type="text" name="email" id="email" required>
                </div>
                <div class="password1">
                    <label>Password</label>
                    <input type="password" name="password" id="password" required>
                </div>
                <div class="submit"><input value="Login" class="submit1" type="submit">
                </div>
                <p id="error"></p>
            </form>
        </div>`


    //loginformevenet
    let loginform = document.querySelector(".loginform form");
    loginform.addEventListener("submit", (e) => {
        e.preventDefault();

        const logindata = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        }
        fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(logindata)

        }).then((res) => {
            let y = res.json();
            y.then((e) => {
                console.log(e)

                sessionStorage.setItem('userid', e.userid);
                sessionStorage.setItem('password', e.password);
                sessionStorage.setItem('email', e.email)
                //if loggedin
                page.innerHTML = ""
                page.innerHTML = `<div class="taskpage">
            <div class="welcome"><h3>Welcome ${e.userid}</h3></div>
          
            <div class="alltasks">
                <div class="addtask">
                    <button class="addtask1">Add task</button>
                </div>
                <div class="switch">
                    <div class="pendingtask"><button class="pendingtask1">Pending Tasks</button></div>
                    <div class="showchart"><button class="showchart1">Show chart</button></div>
                    <div class="completedtask"><button class="completedtask1">Completed Tasks</button></div>
                </div>
                <div class="pendingtaskandcompletedtask">
                    <div class="mandatory">
                         <div class="div1">S No.</div>
                         <div class="div2"> Task Name</div>
                         <div  class="div3">Task Description</div>
                         <div  class="div4">Time Remaining</div>
                         <div  class="div5">Action </div>
                    </div>
                </div>
                
            </div>
          

        </div>`



                //loading pending task after login

                const loadPendingTasks = (tasks) => {
                    const pendingTaskContainer = document.querySelector(".pendingtaskandcompletedtask");
                    pendingTaskContainer.innerHTML = "";

                    if (tasks.length === 0) {
                        pendingTaskContainer.innerHTML = "<h2>There is no pending task. Click Add task to add a task...</h2>";
                        return;
                    }
                    pendingTaskContainer.innerHTML = `      <div class="mandatory">
                         <div class="div1">S No.</div>
                         <div class="div2"> Task Name</div>
                         <div  class="div3">Task Description</div>
                         <div  class="div4">Time Remaining</div>
                         <div  class="div5">Action </div>
                    </div>`


                    tasks.forEach((task, index) => {
                        let serno = document.createElement("div");
                        serno.setAttribute("class", "sno");
                        serno.innerHTML = `<h3>${index + 1}</h3>`;

                        let taskN = document.createElement("div");
                        taskN.setAttribute("class", "taskN");
                        taskN.innerHTML = `<p>${task.taskname}</p>`;

                        let taskD = document.createElement("div");
                        taskD.setAttribute("class", "taskD");
                        taskD.innerText = task.taskdesc;

                        let timerem = document.createElement("div");
                        timerem.setAttribute("class", "timerem");

                        const givenDate = new Date(task.date);

                        const updateTimer = () => {
                            const currentDate = new Date();
                            const diffInMs = givenDate - currentDate;

                            if (diffInMs <= 0) {
                                console.log("The given date has passed.");
                                timerem.innerText = "The given date has passed"
                                serno.style.color = "red"
                                taskN.style.color = "red"
                                taskD.style.color = "red"
                                timerem.style.color = "red"
                                clearInterval(timerInterval);
                                return;
                            }

                            const hours = Math.floor(diffInMs / (1000 * 60 * 60));
                            const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
                            const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

                            timerem.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
                        };

                        const timerInterval = setInterval(updateTimer, 1000);
                        updateTimer();

                        let buttons = document.createElement("div");
                        buttons.setAttribute("class", "buttons");

                        let completedbtn = document.createElement("button");
                        completedbtn.setAttribute("class", "completedbtn");
                        completedbtn.textContent = "Completed?";

                        let deletebtn = document.createElement("button");
                        deletebtn.setAttribute("class", "deletebtn");
                        deletebtn.textContent = "Delete?";

                        buttons.appendChild(completedbtn);
                        buttons.appendChild(deletebtn);

                        let taskbody = document.createElement("div");
                        taskbody.setAttribute("class", "taskbody");
                        taskbody.appendChild(serno);
                        taskbody.appendChild(taskN);
                        taskbody.appendChild(taskD);
                        taskbody.appendChild(timerem);
                        taskbody.appendChild(buttons);

                        pendingTaskContainer.appendChild(taskbody);

                        completedbtn.addEventListener("click", async () => {
                            let completedtasksend = {
                                taskname: task.taskname,
                                taskdesc: task.taskdesc,
                                date: task.date,
                                email: sessionStorage.getItem('email'),
                                password: sessionStorage.getItem('password')
                            }

                            fetch("http://localhost:8080/completed", {
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(completedtasksend)
                            }).then(res => res.json())
                                .then(updatedTasks => {
                                    loadPendingTasks(updatedTasks.pendingtask);
                                });
                        });


                        deletebtn.addEventListener("click", async () => {
                            let deletetask = {
                                taskname: task.taskname,
                                taskdesc: task.taskdesc,
                                date: task.date,
                                email: sessionStorage.getItem('email'),
                                password: sessionStorage.getItem('password')
                            }
                            fetch("http://localhost:8080/deleted", {
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(deletetask)
                            }).then(res => res.json())
                                .then(updatedTasks => {
                                    loadPendingTasks(updatedTasks.pendingtask);
                                });
                        })
                    });
                };

                loadPendingTasks(e.pendingtask);





                //inside task page
                document.getElementsByClassName("pendingtask1")[0].addEventListener("click", async () => {
                    document.getElementsByClassName("pendingtask1")[0].style.backgroundColor = "rgb(222, 144, 222)"
                    document.getElementsByClassName("showchart1")[0].style.backgroundColor = "white"
                    document.getElementsByClassName("completedtask1")[0].style.backgroundColor = "white"

                    document.getElementsByClassName("pendingtaskandcompletedtask")[0].innerHTML = ""
                    //data loading after clicking back to pending task

                    fetch("http://localhost:8080/login", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(logindata)


                    }).then((ed) => {

                        let y = ed.json()
                        y.then((e) => {
                            loadPendingTasks(e.pendingtask);
                        })

                    })

                })
                //loading pending task after login--------------ends

                document.getElementsByClassName("completedtask1")[0].addEventListener("click", async () => {
                    document.getElementsByClassName("completedtask1")[0].style.backgroundColor = "rgb(222, 144, 222)"
                    document.getElementsByClassName("pendingtask1")[0].style.backgroundColor = "white"
                    document.getElementsByClassName("showchart1")[0].style.backgroundColor = "white"



                    //loading completed task after cickng btn========----
                    const completeddata = {
                        email: sessionStorage.getItem('email'),
                        password: sessionStorage.getItem('password')
                    }
                    fetch("http://localhost:8080/login", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(completeddata)

                    }).then((e) => {
                        let z = e.json();
                        z.then((e) => {
                            if (e.completedtask.length == 0) {
                                document.getElementsByClassName("pendingtaskandcompletedtask")[0].innerHTML = "<h2>All completed task will be shown here if not then there is no completed task</h2>"
                            }
                            if (e.completedtask.length != 0) {
                                document.getElementsByClassName("pendingtaskandcompletedtask")[0].innerHTML = `<div class="mandatory">
                                    <div class="div1">S No.</div>
                                    <div class="div2"> Task Name</div>
                                    <div  class="div3">Task Description</div>
                                    <div  class="div4">Completed At</div>
                                 
                               </div>`

                                for (let i = 0; i < e.completedtask.length; i++) {
                                    let serno = document.createElement("div")
                                    serno.setAttribute("class", "sno compc")


                                    serno.innerHTML = `<h3>${i + 1}</h3>`


                                    let taskN = document.createElement("div")
                                    taskN.setAttribute("class", "taskN compc")

                                    taskN.innerHTML = `<p>${e.completedtask[i].taskname}</p>`

                                    let taskD = document.createElement("div")
                                    taskD.setAttribute("class", "taskD compc")

                                    taskD.innerText = e.completedtask[i].taskdesc

                                    let timerem = document.createElement("div")
                                    timerem.setAttribute("class", "timerem compc1")

                                    timerem.innerText = e.completedtask[i].date

                                    let taskbody = document.createElement("div")
                                    taskbody.setAttribute("class", "taskbody")

                                    //appednig starts-------------
                                    taskbody.appendChild(serno)
                                    taskbody.appendChild(taskN)
                                    taskbody.appendChild(taskD)
                                    taskbody.appendChild(timerem)


                                    document.getElementsByClassName("pendingtaskandcompletedtask")[0].appendChild(taskbody)
                                }
                            }
                        })

                    })

                })
                document.getElementsByClassName("showchart1")[0].addEventListener("click", async () => {
                    document.getElementsByClassName("completedtask1")[0].style.backgroundColor = "white"
                    document.getElementsByClassName("pendingtask1")[0].style.backgroundColor = "white"
                    document.getElementsByClassName("showchart1")[0].style.backgroundColor = "rgb(222, 144, 222)"
                    document.getElementsByClassName("pendingtaskandcompletedtask")[0].innerHTML = ""

                    document.getElementsByClassName("pendingtaskandcompletedtask")[0].innerHTML = `   <canvas id="taskChart" width="400" height="400"></canvas>`

                    //piechart



                    async function showPendingTasksPieChart() {
                        const email = sessionStorage.getItem('email');
                        const password = sessionStorage.getItem('password');

                        const logindata = {
                            email: email,
                            password: password
                        };

                        try {
                            const response = await fetch("http://localhost:8080/login", {
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(logindata)
                            });

                            const data = await response.json();

                            if (data.pendingtask && data.pendingtask.length > 0) {
                                // Prepare data for the pie chart==============================================================================================================
                                const labels = [];
                                const timeRemaining = [];

                                data.pendingtask.forEach(task => {
                                    labels.push(task.taskname);

                                    const givenDate = new Date(task.date);
                                    const currentDate = new Date();
                                    const diffInMs = givenDate - currentDate;
                                    const diffInHours = diffInMs / (1000 * 60 * 60);

                                    timeRemaining.push(diffInHours);
                                });

                                // Create the pie chart
                                const ctx = document.getElementById('taskChart').getContext('2d');
                                new Chart(ctx, {
                                    type: 'pie',
                                    data: {
                                        labels: labels,
                                        datasets: [{
                                            label: 'Time Remaining (hours)',
                                            data: timeRemaining,
                                            backgroundColor: [
                                                'rgba(255, 99, 132, 0.2)',
                                                'rgba(54, 162, 235, 0.2)',
                                                'rgba(255, 206, 86, 0.2)',
                                                'rgba(75, 192, 192, 0.2)',
                                                'rgba(153, 102, 255, 0.2)',
                                                'rgba(255, 159, 64, 0.2)'
                                            ],
                                            borderColor: [
                                                'rgba(255, 99, 132, 1)',
                                                'rgba(54, 162, 235, 1)',
                                                'rgba(255, 206, 86, 1)',
                                                'rgba(75, 192, 192, 1)',
                                                'rgba(153, 102, 255, 1)',
                                                'rgba(255, 159, 64, 1)'
                                            ],
                                            borderWidth: 1
                                        }]
                                    },
                                    options: {
                                        responsive: true,
                                        plugins: {
                                            legend: {
                                                position: 'top',
                                            },
                                            title: {
                                                display: true,
                                                text: 'Pending Tasks by Time Remaining'
                                            }
                                        }
                                    }
                                });
                            } else {
                                console.log("No pending tasks found.");
                                document.getElementsByClassName("pendingtaskandcompletedtask")[0].innerHTML = `<h1>No Pending tasks found ...</h1>`

                            }
                        } catch (error) {
                            console.error('Error fetching pending tasks:', error);
                        }
                    }


                    showPendingTasksPieChart();













                    //piechart----------------ends



                })
                const addTaskForm = document.getElementsByClassName("addtaskform")[0];
                //canceladdtask{}
                document.getElementById("canceltask").addEventListener("click", () => {

                    addTaskForm.style.zIndex = -1;
                    addTaskForm.classList.add('inactive');
                })


                document.getElementsByClassName("addtask1")[0].addEventListener("click", () => {
                    const page = document.querySelector('.taskpage');


                    page.style.zIndex = 0;
                    addTaskForm.style.zIndex = 1;
                    addTaskForm.classList.add('active');
                    document.getElementById("taskname").value = ""
                    document.getElementById("taskdesc").value = ""
                    document.getElementById("datetime").value = ""






                });

                //addtask

                document.querySelector(".addtaskinform").addEventListener("submit", async (e) => {
                    document.getElementsByClassName("pendingtask1")[0].style.backgroundColor = "rgb(222, 144, 222)"
                    document.getElementsByClassName("showchart1")[0].style.backgroundColor = "white"
                    document.getElementsByClassName("completedtask1")[0].style.backgroundColor = "white"
                    let taskName = document.getElementById("taskname");
                    let taskDesc = document.getElementById("taskdesc");
                    let datetime = document.getElementById("datetime");


                    if (!taskName.checkValidity() || !taskDesc.checkValidity() || !datetime.checkValidity()) {
                        e.preventDefault();
                        taskName.reportValidity();
                        taskDesc.reportValidity();
                        datetime.reportValidity();
                        return;
                    }

                    e.preventDefault();
                    const page = document.querySelector('.taskpage');
                    const addTaskForm = document.getElementsByClassName("addtaskform")[0];

                    page.style.zIndex = 1;
                    addTaskForm.style.zIndex = 0;
                    addTaskForm.classList.remove('active');
                });
                const sessionStorage_userid = sessionStorage.getItem('userid')
                const sessionStorage_password = sessionStorage.getItem('password')
                const sessionStorage_email = sessionStorage.getItem('email')
                document.getElementById("submittask").addEventListener("click", async (e) => {
                    let taskName = document.getElementById("taskname").value;
                    let taskDesc = document.getElementById("taskdesc").value;
                    let datetime = document.getElementById("datetime").value;
                    console.log(taskDesc, taskName, datetime)
                    //time validate
                    const selectedDateTime = new Date(now.value);

                    if (selectedDateTime <= now) {

                        e.preventDefault();
                        alert('Please select a date and time greater than the current time.');
                    }
                    //time validate
                    let taskadd = {
                        taskname: taskName,
                        taskdesc: taskDesc,
                        date: datetime,
                        email: sessionStorage_email,
                        password: sessionStorage_password
                    }
                    console.log(taskadd)

                    await fetch("http://localhost:8080/addtask", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(taskadd)

                    }).then(() => {
                        //----------------------------
                        //after adding task updating the task
                        document.getElementsByClassName("pendingtaskandcompletedtask")[0].innerHTML = ""


                        fetch("http://localhost:8080/login", {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(logindata)


                        }).then((ed) => {

                            let y = ed.json()
                            y.then((e) => {
                                console.log(e.pendingtask)
                                loadPendingTasks(e.pendingtask);
                            })

                        })


                    }

                        //after adding task updating the task

                        //----------------------------ends
                    ).catch((g) => {
                        console.log(g)
                    })
                })
                //inside task page     ---- 

                //sessionstorage
                //persisting login after tabchange
                if (sessionStorage_password != null && sessionStorage_userid != null) {
                    document.getElementById("login").addEventListener("click", async (e) => {


                        page.innerHTML = `<div class="taskpage">
            <div class="welcome"><h3>Welcome ${sessionStorage_userid}</h3></div>
          
            <div class="alltasks">
                <div class="addtask">
                    <button class="addtask1">Add task</button>
                </div>
                <div class="switch">
                    <div class="pendingtask"><button class="pendingtask1">Pending Tasks</button></div>
                    <div class="showchart"><button class="showchart1">Show chart</button></div>
                    <div class="completedtask"><button class="completedtask1">Completed Tasks</button></div>
                </div>
                <div class="pendingtaskandcompletedtask"></div>
                
            </div>
          

        </div>`

                        //loading pending task after login

                        const loadPendingTasks = (tasks) => {
                            const pendingTaskContainer = document.querySelector(".pendingtaskandcompletedtask");
                            pendingTaskContainer.innerHTML = "";

                            if (tasks.length === 0) {
                                pendingTaskContainer.innerHTML = "<h2>There is no pending task. Click Add task to add a task...</h2>";
                                return;
                            }
                            pendingTaskContainer.innerHTML = `      <div class="mandatory">
         <div class="div1">S No.</div>
         <div class="div2"> Task Name</div>
         <div  class="div3">Task Description</div>
         <div  class="div4">Time Remaining</div>
         <div  class="div5">Action </div>
    </div>`


                            tasks.forEach((task, index) => {
                                let serno = document.createElement("div");
                                serno.setAttribute("class", "sno");
                                serno.innerHTML = `<h3>${index + 1}</h3>`;

                                let taskN = document.createElement("div");
                                taskN.setAttribute("class", "taskN");
                                taskN.innerHTML = `<p>${task.taskname}</p>`;

                                let taskD = document.createElement("div");
                                taskD.setAttribute("class", "taskD");
                                taskD.innerText = task.taskdesc;

                                let timerem = document.createElement("div");
                                timerem.setAttribute("class", "timerem");

                                const givenDate = new Date(task.date);

                                const updateTimer = () => {
                                    const currentDate = new Date();
                                    const diffInMs = givenDate - currentDate;

                                    if (diffInMs <= 0) {
                                        console.log("The given date has passed.");
                                        clearInterval(timerInterval);
                                        return;
                                    }

                                    const hours = Math.floor(diffInMs / (1000 * 60 * 60));
                                    const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
                                    const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

                                    timerem.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
                                };

                                const timerInterval = setInterval(updateTimer, 1000);
                                updateTimer();

                                let buttons = document.createElement("div");
                                buttons.setAttribute("class", "buttons");

                                let completedbtn = document.createElement("button");
                                completedbtn.setAttribute("class", "completedbtn");
                                completedbtn.textContent = "Completed?";

                                let deletebtn = document.createElement("button");
                                deletebtn.setAttribute("class", "deletebtn");
                                deletebtn.textContent = "Delete?";

                                buttons.appendChild(completedbtn);
                                buttons.appendChild(deletebtn);

                                let taskbody = document.createElement("div");
                                taskbody.setAttribute("class", "taskbody");
                                taskbody.appendChild(serno);
                                taskbody.appendChild(taskN);
                                taskbody.appendChild(taskD);
                                taskbody.appendChild(timerem);
                                taskbody.appendChild(buttons);

                                pendingTaskContainer.appendChild(taskbody);

                                completedbtn.addEventListener("click", async () => {
                                    let completedtasksend = {
                                        taskname: task.taskname,
                                        taskdesc: task.taskdesc,
                                        date: task.date,
                                        email: sessionStorage.getItem('email'),
                                        password: sessionStorage.getItem('password')
                                    }

                                    fetch("http://localhost:8080/completed", {
                                        method: "POST",
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify(completedtasksend)
                                    }).then(res => res.json())
                                        .then(updatedTasks => {
                                            loadPendingTasks(updatedTasks.pendingtask);
                                        });
                                });


                                deletebtn.addEventListener("click", async () => {
                                    let deletetask = {
                                        taskname: task.taskname,
                                        taskdesc: task.taskdesc,
                                        date: task.date,
                                        email: sessionStorage.getItem('email'),
                                        password: sessionStorage.getItem('password')
                                    }
                                    fetch("http://localhost:8080/deleted", {
                                        method: "POST",
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify(deletetask)
                                    }).then(res => res.json())
                                        .then(updatedTasks => {
                                            loadPendingTasks(updatedTasks.pendingtask);
                                        });
                                })
                            });
                        };

                        loadPendingTasks(e.pendingtask);





                        //inside task page
                        document.getElementsByClassName("pendingtask1")[0].addEventListener("click", async () => {
                            document.getElementsByClassName("pendingtask1")[0].style.backgroundColor = "rgb(222, 144, 222)"
                            document.getElementsByClassName("showchart1")[0].style.backgroundColor = "white"
                            document.getElementsByClassName("completedtask1")[0].style.backgroundColor = "white"

                            document.getElementsByClassName("pendingtaskandcompletedtask")[0].innerHTML = ""
                            //data loading after clicking back to pending task

                            fetch("http://localhost:8080/login", {
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(logindata)


                            }).then((ed) => {

                                let y = ed.json()
                                y.then((e) => {
                                    loadPendingTasks(e.pendingtask);
                                })

                            })

                        })
                        //loading pending task after login--------------ends

                        document.getElementsByClassName("completedtask1")[0].addEventListener("click", async () => {
                            document.getElementsByClassName("completedtask1")[0].style.backgroundColor = "rgb(222, 144, 222)"
                            document.getElementsByClassName("pendingtask1")[0].style.backgroundColor = "white"
                            document.getElementsByClassName("showchart1")[0].style.backgroundColor = "white"



                            //loading completed task after cickng btn========----
                            const completeddata = {
                                email: sessionStorage.getItem('email'),
                                password: sessionStorage.getItem('password')
                            }
                            fetch("http://localhost:8080/login", {
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(completeddata)

                            }).then((e) => {
                                let z = e.json();
                                z.then((e) => {
                                    if (e.completedtask.length == 0) {
                                        document.getElementsByClassName("pendingtaskandcompletedtask")[0].innerHTML = "<h2>All completed task will be shown here if not then there is no completed task</h2>"
                                    }
                                    if (e.completedtask.length != 0) {
                                        document.getElementsByClassName("pendingtaskandcompletedtask")[0].innerHTML = `<div class="mandatory">
                    <div class="div1">S No.</div>
                    <div class="div2"> Task Name</div>
                    <div  class="div3">Task Description</div>
                    <div  class="div4">Completed At</div>
                 
               </div>`

                                        for (let i = 0; i < e.completedtask.length; i++) {
                                            let serno = document.createElement("div")
                                            serno.setAttribute("class", "sno compc")


                                            serno.innerHTML = `<h3>${i + 1}</h3>`


                                            let taskN = document.createElement("div")
                                            taskN.setAttribute("class", "taskN compc")

                                            taskN.innerHTML = `<p>${e.completedtask[i].taskname}</p>`

                                            let taskD = document.createElement("div")
                                            taskD.setAttribute("class", "taskD compc")

                                            taskD.innerText = e.completedtask[i].taskdesc

                                            let timerem = document.createElement("div")
                                            timerem.setAttribute("class", "timerem compc1")

                                            timerem.innerText = e.completedtask[i].date

                                            let taskbody = document.createElement("div")
                                            taskbody.setAttribute("class", "taskbody")

                                            //appednig starts-------------
                                            taskbody.appendChild(serno)
                                            taskbody.appendChild(taskN)
                                            taskbody.appendChild(taskD)
                                            taskbody.appendChild(timerem)


                                            document.getElementsByClassName("pendingtaskandcompletedtask")[0].appendChild(taskbody)
                                        }
                                    }
                                })

                            })

                        })
                        document.getElementsByClassName("showchart1")[0].addEventListener("click", async () => {
                            document.getElementsByClassName("completedtask1")[0].style.backgroundColor = "white"
                            document.getElementsByClassName("pendingtask1")[0].style.backgroundColor = "white"
                            document.getElementsByClassName("showchart1")[0].style.backgroundColor = "rgb(222, 144, 222)"
                            document.getElementsByClassName("pendingtaskandcompletedtask")[0].innerHTML = ""

                            document.getElementsByClassName("pendingtaskandcompletedtask")[0].innerHTML = `   <canvas id="taskChart" width="400" height="400"></canvas>`

                            //piechart



                            async function showPendingTasksPieChart() {
                                const email = sessionStorage.getItem('email');
                                const password = sessionStorage.getItem('password');

                                const logindata = {
                                    email: email,
                                    password: password
                                };

                                try {
                                    const response = await fetch("http://localhost:8080/login", {
                                        method: "POST",
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify(logindata)
                                    });

                                    const data = await response.json();

                                    if (data.pendingtask && data.pendingtask.length > 0) {
                                        // Prepare data for the pie chart==============================================================================================================
                                        const labels = [];
                                        const timeRemaining = [];

                                        data.pendingtask.forEach(task => {
                                            labels.push(task.taskname);

                                            const givenDate = new Date(task.date);
                                            const currentDate = new Date();
                                            const diffInMs = givenDate - currentDate;
                                            const diffInHours = diffInMs / (1000 * 60 * 60);

                                            timeRemaining.push(diffInHours);
                                        });

                                        // Create the pie chart
                                        const ctx = document.getElementById('taskChart').getContext('2d');
                                        new Chart(ctx, {
                                            type: 'pie',
                                            data: {
                                                labels: labels,
                                                datasets: [{
                                                    label: 'Time Remaining (hours)',
                                                    data: timeRemaining,
                                                    backgroundColor: [
                                                        'rgba(255, 99, 132, 0.2)',
                                                        'rgba(54, 162, 235, 0.2)',
                                                        'rgba(255, 206, 86, 0.2)',
                                                        'rgba(75, 192, 192, 0.2)',
                                                        'rgba(153, 102, 255, 0.2)',
                                                        'rgba(255, 159, 64, 0.2)'
                                                    ],
                                                    borderColor: [
                                                        'rgba(255, 99, 132, 1)',
                                                        'rgba(54, 162, 235, 1)',
                                                        'rgba(255, 206, 86, 1)',
                                                        'rgba(75, 192, 192, 1)',
                                                        'rgba(153, 102, 255, 1)',
                                                        'rgba(255, 159, 64, 1)'
                                                    ],
                                                    borderWidth: 1
                                                }]
                                            },
                                            options: {
                                                responsive: true,
                                                plugins: {
                                                    legend: {
                                                        position: 'top',
                                                    },
                                                    title: {
                                                        display: true,
                                                        text: 'Pending Tasks by Time Remaining'
                                                    }
                                                }
                                            }
                                        });
                                    } else {
                                        console.log("No pending tasks found.");
                                        document.getElementsByClassName("pendingtaskandcompletedtask")[0].innerHTML = `<h1>No Pending tasks found ...</h1>`

                                    }
                                } catch (error) {
                                    console.error('Error fetching pending tasks:', error);
                                }
                            }


                            showPendingTasksPieChart();













                            //piechart----------------ends



                        })
                        const addTaskForm = document.getElementsByClassName("addtaskform")[0];
                        //canceladdtask{}
                        document.getElementById("canceltask").addEventListener("click", () => {

                            addTaskForm.style.zIndex = -1;
                            addTaskForm.classList.add('inactive');
                        })


                        document.getElementsByClassName("addtask1")[0].addEventListener("click", () => {
                            const page = document.querySelector('.taskpage');


                            page.style.zIndex = 0;
                            addTaskForm.style.zIndex = 1;
                            addTaskForm.classList.add('active');
                            document.getElementById("taskname").value = ""
                            document.getElementById("taskdesc").value = ""
                            document.getElementById("datetime").value = ""






                        });

                        //addtask

                        document.querySelector(".addtaskinform").addEventListener("submit", async (e) => {
                            document.getElementsByClassName("pendingtask1")[0].style.backgroundColor = "rgb(222, 144, 222)"
                            document.getElementsByClassName("showchart1")[0].style.backgroundColor = "white"
                            document.getElementsByClassName("completedtask1")[0].style.backgroundColor = "white"
                            let taskName = document.getElementById("taskname");
                            let taskDesc = document.getElementById("taskdesc");
                            let datetime = document.getElementById("datetime");


                            if (!taskName.checkValidity() || !taskDesc.checkValidity() || !datetime.checkValidity()) {
                                e.preventDefault();
                                taskName.reportValidity();
                                taskDesc.reportValidity();
                                datetime.reportValidity();
                                return;
                            }

                            e.preventDefault();
                            const page = document.querySelector('.taskpage');
                            const addTaskForm = document.getElementsByClassName("addtaskform")[0];

                            page.style.zIndex = 1;
                            addTaskForm.style.zIndex = 0;
                            addTaskForm.classList.remove('active');
                        });
                        const sessionStorage_userid = sessionStorage.getItem('userid')
                        const sessionStorage_password = sessionStorage.getItem('password')
                        const sessionStorage_email = sessionStorage.getItem('email')
                        document.getElementById("submittask").addEventListener("click", async (e) => {
                            let taskName = document.getElementById("taskname").value;
                            let taskDesc = document.getElementById("taskdesc").value;
                            let datetime = document.getElementById("datetime").value;
                            console.log(taskDesc, taskName, datetime)

                            let taskadd = {
                                taskname: taskName,
                                taskdesc: taskDesc,
                                date: datetime,
                                email: sessionStorage_email,
                                password: sessionStorage_password
                            }
                            console.log(taskadd)

                            await fetch("http://localhost:8080/addtask", {
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(taskadd)

                            }).then(() => {
                                //----------------------------
                                //after adding task updating the task
                                document.getElementsByClassName("pendingtaskandcompletedtask")[0].innerHTML = ""


                                fetch("http://localhost:8080/login", {
                                    method: "POST",
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(logindata)


                                }).then((ed) => {

                                    let y = ed.json()
                                    y.then((e) => {
                                        console.log(e.pendingtask)
                                        loadPendingTasks(e.pendingtask);
                                    })

                                })


                            }

                                //after adding task updating the task

                                //----------------------------ends

                            ).catch((g) => {
                                console.log(g)
                            })
                        })


                    })

                }

                //sessionstorage enndsss
                //persisting login after tabchange

            }).catch((e) => {
                console.log("value error")
                document.getElementById("error").innerText = "Email or Password might be wrong"
            })
        })
    });//-stop------------------

})

//default homepage
home.style.backgroundColor = "white"
home.style.color = "black"
//default homepage



//inside task
document.getElementsByClassName("addtask1")

//date time validation today--->next ,not yesterday------------
const now = new Date();

const year = now.getFullYear();
const month = ('0' + (now.getMonth() + 1)).slice(-2);
const day = ('0' + now.getDate()).slice(-2);
const hours = ('0' + now.getHours()).slice(-2);
const minutes = ('0' + now.getMinutes()).slice(-2);
const currentDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
document.getElementById('datetime').min = currentDateTime;




