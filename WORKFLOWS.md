* Can you review the website and pick six most important user journeys from the site?
   
    1. User Signup  
    2. User Login 
    3. Add to Cart and Cart Management
    4. Checkout and Payment workflow
    5. Contact Us
    6. Subscription

* Out of the six user journeys proceed to pick four journeys to script against and explain why you picked these journeys?

1. User Signup 

Signup is the gateway for new users into the application. Most core features depend on a successful registration, and incorrect validations can lead to security risks such as duplicate or unauthorised accounts.

2. User Login 

This is the gateway to the application. Most core features (view products, checkout) depend on a successful login. Also potential security risks if validation is incorrect.

3. Add to Cart and Cart Management

The cart represents the user’s purchase intent.Any issue here interrupts the path to checkout. Incorrect totals or missing items may affect user order experience.

4. Checkout and Payment Workflow

Business-critical flow. It validates end-to-end integration between UI, backend, and payment logic.Any issues may cause failed or duplicate orders.

* Proceed to choose the framework and programming language you intend on using and explain why you choose them?

Framework Playwright:
    Provides reliable and fast end-to-end testing with built-in auto-waiting. It supports cross-browser testing from a single codebase. It enables both UI and API testing within the same framework. It offers built-in test runner, reporting, screenshots, and video recording with minimal setup.

Programming language JavaScript(Typescript):
    It's an excellent ecosystem and tooling support with Node.js.It's really easy to read and maintain, especially for test automation code.TypeScript is suitable because it catches errors early using static typing, so many issues are found before tests even run.

* Build a basic framework from scratch and script the four journeys you have chosen previously.