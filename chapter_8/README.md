<h1>Object-Oriented Programming</h1>

<p>Object-oriented programming (OOP) is an old paradigm in computer science.</p>

<p>The basic idea is simple and intuitive: an object is a logically related collection of data and functionality. It’s designed to reflect our natural understanding of the world. A car is an object that has data (make, model, number of doors, VIN, etc.) and functionality (accelerate, shift, open doors, turn on headlights, etc.). Furthermore, OOP makes it possible to think about things abstractly (a car) and concretely (a specific car).</p>

<p>Let's cover the basic vocabulary of <strong>OPP</strong>:</p>

<p>A <i>class</i> refers to a generic thing (a car).</p>

<p>An <i>instance</i> (or object instance) refers to a specific thing (a specific car, such as “My Car”).</p>

<p>A piece of functionality (accelerate) is called a <i>method</i>.</p>

<p>A piece of functionality that is related to the class, but doesn’t refer to a specific instance, is called a <i>class method</i> (for example, “create new VIN” might be a class method: it doesn’t yet refer to a specific new car, and certainly we don’t expect a specific car to have the knowledge or ability to create a new, valid VIN).</p>

<p>When an instance is first created, its constructor runs. The <i>constructor</i> initializes the object instance.</p>

<p>OOP also gives us a framework for hierarchically categorizing classes. For example,there could be a more generic vehicle class. A vehicle may have a range (the distance it can go without refueling or recharging), but unlike a car, it might not have wheels (a boat is an example of a vehicle that probably doesn’t have wheels). We say that vehicle
is a superclass of car, and that car is a subclass of vehicle. The vehicle class may have multiple subclasses: cars, boats, planes, motorcycles, bicycles, and so on. And subclasses may, in turn, have additional subclasses. For example, the boat subclass may have further subclasses of sailboat, rowboat, canoe, tugboat, motorboat, and so on.</p>
