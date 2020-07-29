# https://www.tutorialspoint.com/mvvm/mvvm_introduction.htm

The Model, View, ViewModel (MVVM pattern) is all about guiding you in how to organize and structure your code to write maintainable, testable and extensible applications.

Model − It simply holds the data and has nothing to do with any of the business logic.

ViewModel − It acts as the link/connection between the Model and View and makes stuff look pretty.

View − It simply holds the formatted data and essentially delegates everything to the Model.

In practice, you normally want some other class sitting between the user interface and the model. This has two important roles.

First, it adapts your application model for a particular user interface view.

Second, it's where any nontrivial interaction logic lives, and by that, I mean code required to get your user interface to behave in the way you want.


# https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel

Model–view–viewmodel (MVVM) is a software architectural pattern that facilitates the separation of the development of the graphical user interface (the view) – be it via a markup language or GUI code – from the development of the business logic or back-end logic (the model) so that the view is not dependent on any specific model platform. The view model of MVVM is a value converter,[1] meaning the view model is responsible for exposing (converting) the data objects from the model in such a way that objects are easily managed and presented. In this respect, the view model is more model than view, and handles most if not all of the view's display logic.[1] The view model may implement a mediator pattern, organizing access to the back-end logic around the set of use cases supported by the view.

Model–view–viewmodel is also referred to as model–view–binder

Model
Model refers either to a domain model, which represents real state content (an object-oriented approach), or to the data access layer, which represents content (a data-centric approach).[citation needed]
View
As in the model-view-controller (MVC) and model-view-presenter (MVP) patterns, the view is the structure, layout, and appearance of what a user sees on the screen.[6] It displays a representation of the model and receives the user's interaction with the view (clicks, keyboard, gestures, etc.), and it forwards the handling of these to the view model via the data binding (properties, event callbacks, etc.) that is defined to link the view and view model.
View model
The view model is an abstraction of the view exposing public properties and commands. Instead of the controller of the MVC pattern, or the presenter of the MVP pattern, MVVM has a binder, which automates communication between the view and its bound properties in the view model. The view model has been described as a state of the data in the model.[7]
The main difference between the view model and the Presenter in the MVP pattern is that the presenter has a reference to a view, whereas the view model does not. Instead, a view directly binds to properties on the view model to send and receive updates. To function efficiently, this requires a binding technology or generating boilerplate code to do the binding.[6]
Binder
Declarative data and command-binding are implicit in the MVVM pattern. In the Microsoft solution stack, the binder is a markup language called XAML.[8] The binder frees the developer from being obliged to write boiler-plate logic to synchronize the view model and view. When implemented outside of the Microsoft stack, the presence of a declarative data binding technology is what makes this pattern possible,[4][9] and without a binder, one would typically use MVP or MVC instead and have to write more boilerplate (or generate it with some other tool).

Even when a single developer works on the entire code base, a proper separation of the view from the model is more productive, as the user interface typically changes frequently and late in the development cycle based on end-user feedback.[citation needed]

The MVVM pattern attempts to gain both advantages of separation of functional development provided by MVC, while leveraging the advantages of data bindings and the framework by binding data as close to the pure application model as possible.[3][10][11][clarification needed] It uses the binder, view model, and any business layers' data-checking features to validate incoming data. The result is that the model and framework drive as much of the operations as possible, eliminating or minimizing application logic which directly manipulates the view (e.g., code-behind).