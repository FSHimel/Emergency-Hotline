1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: **getElementById** is used to grab a single element,
      **getElementsByClassName** is used to grab a group of elements,
      **querySelector** is used to grab the first element of the selector. For example, we have multiple same **tag**, we used a **class name** in multiple element. The **querySelector** will only grab the 1st element of the selector we used where the **querySelectorAll** grabs all the elements of the selector and we can also use loop in it.
2. How do you **create and insert a new element into the DOM**?
Ans: First I will select the parent element where I will insert the new element:
      **const parent = document.getElementById("id")**
      Then I will creat and insert the element exactly like bellow:


      **
        const newDiv = document.createElement("div")
          div.innerHTML=`
                <div>
                    <h2>Hi! I am new div</h2>
                </div>
          `
        parent.appendChild(newDiv);
      **
    
3. What is **Event Bubbling** and how does it work?
Ans: **Event Bubbling** is a process of promoting events. For example click. When a event occures in a child element, it doesn't stop there. It gradddually go upwords throw the parent elent to the root of the document.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans: **Event Delegation** works exactly like **Event Bubbling** but using **Event Delegation** we don't need to add **addEventListener** to every single child element seperately. We only need to use **addEventListener** once for every element with same functionalities. And so it uses less memory than **Event Bubbling**. And we can handle elements dynamiclly too.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans: **preventDefault()** stops the **Default behavior** of an element and **stopPropagation()** stops **bubbling** from child to parent or any further.
