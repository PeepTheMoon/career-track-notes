# https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller

Model–view–controller is a software design pattern.   that divides the related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user. This kind of pattern is used for designing the layout of the page.

The model is the application's dynamic data structure, independent of the user interface. It directly manages the data, logic and rules of the application.

View
Any representation of information such as a chart, diagram or table.

Controller
Accepts input and converts it to commands for the model or view.

In addition to dividing the application into these components, the model–view–controller design defines the interactions between them.[7]

1. The model is responsible for managing the data of the application. It receives user input from the controller.
1. The view means presentation of the model in a particular format.
1. The controller responds to the user input and performs interactions on the data model objects. The controller receives the input, optionally validates it and then passes the input to the model.

Service
Between the controller and the model sometimes goes a layer which is called a service. It fetches data from the model and lets the controller use the fetched data. This layer allows to separate data storage (model), data fetching (service) and data manipulation (controller). Since this layer is not part of the original MVC concept, it is optional in most cases but can be useful for code management and reusability purposes in some cases.

Allows for simultaneous development

Allows code to be reused

# https://hackernoon.com/architecting-single-page-applications-b842ea633c2e

The state represents every piece of data that changes in an application.

The state will consist of immutable objects.

"Immutability makes tracking changes cheap. A change will always result in a new object so we only need to check if the reference to the object has changed."

The domain describes the state and holds the business logic.

The Object.freeze() method freezes an object: that is, prevents new properties from being added to it

The store layer
The data which results from creating and updating articles represents our application’s state.

Application services
This layer is useful for doing all kinds of operations which are adjacent to the state flow

View Layer
The view layer is composed of presentational and container components.
Presentational components are concerned with how things look while container components are concerned with how things work.

# https://blog.testdouble.com/posts/2019-11-04-react-mvc/

Implementing MVC Patterns in React
The MVC pattern described here breaks down into the following two pillars:

1. A Presentation Layer of Controller and View React Components
1. A UI-Agnostic Data Model

