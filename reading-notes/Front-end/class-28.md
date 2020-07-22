# https://medium.com/@mlbors/architectural-styles-and-architectural-patterns-c240f7df88a0#:~:text=Architectural%20Patterns%20VS%20Design%20Patterns&text=In%20a%20few%20words%2C%20while,and%20mechanisms%20of%20a%20system.

In software engineering, an Architectural Pattern is a general and reusable solution to an occurring problem in a particular context. It is a recurring solution to a recurring problem.

The purpose of Architectural Patterns is to understand how the major parts of the system fit together and how messages and data flow through the system.

Architectural Patterns are similar to Design Patterns, but they have a different scope. In a few words, while Design Patterns impact a specific section of the code base, Architectural Patterns are high-level strategies that concern large-scale components, the global properties and mechanisms of a system.

an Architectural Pattern, as we said, is a way to solve a recurring architectural problem, while an Architectural Style is a name given to a recurrent Architectural Design. It doesn’t exist to solve a problem.

An Idiom is a low-level pattern specific to a programming language. It describes how to implement particular aspects of the components or the relationships between them using the features of a given language.

1. Architectural Patterns

Layered

This pattern is used to structure programs that can be decomposed into groups of subtasks. It partitions the concerns of the application into layers.

Most of the time, we have four layers:

  1. Presentation layer or UI layer
  1. Application layer or Service layer
  1. Business logic layer or Domain layer
  1. Data access layer or Persistence layer

The popular Model-View-Controller structure (MVC) is a Layered architecture. The Model layer is just above the database and it sometimes contains some business logic. The View is the top layer and corresponds to what the final user sees. The Controller layer is in the middle and it is in charge to send data from the Model to the View and vice versa.

*One major advantage of this pattern is the separation of concerns. It means that each layer focuses only on its role.*

Event-Driven

Also called EDA, this pattern organizes a system around the production, detection and consumption of events. Such a system consists of event Emitters and event Consumers. Emitters are decoupled from Consumers, which are also decoupled from each other.

An Emitter is an event source and only knows that the event has occurred. A Consumer needs to know an event has occurred and it has the responsibility of applying a reaction as soon as an event is presented. Sometimes, the reaction is not completely provided by a single Consumer that might forward the event to another component after it has filtered or transformed it.

Consumers can subscribe to an event manager receives notifications when events are emitted and forward events to all registered Consumers.

Event-driven architecture is easily adaptable to complex environments and can be easily extended when new event types appear. On the other hand, testing can be complex because interactions between modules can only be tested in a fully functioning system.

That kind of architecture is often used for asynchronous systems or user interfaces.


Domain Driven Design

DDD, is an object-oriented approach. Here, the idea is to design software based on the Business Domain, its elements and behaviors, and the relationships between them.
The Business Domain is like a sphere of knowledge and activity around which the application logic revolves. It involves rules, processes and existing systems that need to be integrated into our solution. It is a set of classes that represent objects in the Business Model being implemented. The Business Model is the solution to the problem we are trying to solve. To organize and structure the knowledge of our problem, we use a Domain Model that should be accessible and understandable by everyone who is involved with the project. Domain Driven Design is about solving the problems of an organization. The Domain Model is about understanding and interpreting the important aspects of the given problems.

A language is also structured around the Domain Model and used by all team members to connect all the activities of the team with the software. It is called Ubiquitous Language. We also refer to the Context to define the setting that determines the meaning of a statement.
Domain Driven Design eases communication and improves flexibility.
Domain Driven Design is useful when we build complex software where the need for change is determined


Pipes and Filters

This Architectural Style decomposes a task that performs complex processing into a series of separate elements that can be reused. In other words, it consists of any number of components, called Filters, that transform or filter data, before passing it to other components through connectors called Pipes.
A Filter transforms the data it receives through Pipes with which it is connected. A Filter can have many input Pipes and many output Pipes.
A Pipe is some kind of connector that passes data from one Filter to the next.
There are also two other components, the Pump, which is the data source, and the Sink, which is the final target.
Pipes and Filters can be applied when the processing of our application can be broken down into a set of independent steps. It can also be useful when flexibility is required or when each step of the processing of the application have different scalability requirements.


Microservices

creates several tiny programs.
Such an architecture requires every service to be completely independent of the others.
This architecture can be helpful when we want to develop new businesses or web applications rapidly.

# https://alchemycodelab.github.io/fsjs-notes/05_react/patterns/container_presentation/

The container and presentation pattern splits code into two distinct places:

containers : are stateful components that contain your business login.  Concerned with how things work.  Manage state, fetch data, use event handlers, pass info to other componenets via props

presentations : are stateless components that present your data- how things look.  receive props and use them to render to the DOM

# https://alchemycodelab.github.io/fsjs-notes/05_react/patterns/container_presentation/container-details



