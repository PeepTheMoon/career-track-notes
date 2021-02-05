nerual nets:
supervised vs unsupervised learning

supervised will be nice for when you already have your labels, like images for eample (a dog vs something that's not a dog)

unsupervised learning will take in a bunch of images without any information and allow the computer to make distinctions and groups for itself.

Inside of each you have two models that each can create:
regression and classification models

Regression you will use on continuous data and classification you will use on discrete data

regression, for example in a housing market, you can have data with a price and sq ft where you plot the data on a graph and form a linear regression line that hits as many points as possible and then it will allow you to make predictions of price when you see another house on the market with a similar sq ft.

classification: are binary, either yes/no, etc
happiness
happiness could depend on two variables, like the amount of sun in a day and how much exercise, it's also a linera regression problem, but you try to find a dividing line in the data and make predictions based on where the data point falls on that dividing line.

regression problems can use polynomial regression and classification can use logistic regression which has a decision boundary.  If you're on the left of a decision boundary, you will return a 0(is not part of it) and if you're on the right you will return a 1 (is part of it).  As the data point gets further from the line you are more sure of whether it's part of the class or not, whereas the closer the data point is to the boundary you are less sure.  You will use a sigmoid function or a tanh function.

Neural networks are only useful for classification problems.  They allow you to take really complex functions and distribute them over a hidden layer(or multiple) layers of neruons.  YOu send each of your inputs to each one of these neurons and then you multiply each one by some value (thetas) and feed it forward to its output layer.  The output layer will give it some sort of curve and give and you an error rate, where you feed that error rate back through the network on repeat until the decision boundary gets better and better 
