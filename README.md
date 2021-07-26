# Project-3 

<h2>Overview</h2>

<p>My final GA project was a solo venture, developed with a Python Django back-end and React front-end. I decided on Dinosaur Petshop- an online pet store where you could browse for and ‘buy’ different species of dinosaur, as well as related food and toys.</p>

<h2>Brief</h2>

<li>Build a full-stack application by making your own backend and your own front-end.</li>
<li>Use a Python Django API using Django REST Framework to serve your data from a Postgres database.</li>
<li>Consume your API with a separate front-end built with React.</li>
<li>Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models.</li>
<li>Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut.</li>
<li>Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients & employers. ALLOW time for this.</li>
<li>Be deployed online so it's publicly accessible.</li>


<h2>Technologies Used</h2>

<li>Python</li>
<li>React</li>
<li>Django</li>
<li>Postgres</li>
<li>Git</li>
<li>Github</li>
<li>Bulma</li>
<li>Material-UI</li>

<h3>Approach Taken</h3>

<p>To begin with I pseudo-ed out the pages and features I wanted to include. Given the deadline, my recent exposure to Python and the fact it would be a solo venture I opted to keep it fairly simple to start with- home, index and show pages, with a ‘basket’ page similar to what my team and I attempted in project 2.</p>

<img src="https://i.imgur.com/HMD4rXz.png" alt="DPS Pseudo"/> 

<h3>Backend</h3>

<p>I built my two models- Dinosaurs and Misc. The reasoning behind this was to give each model a different set of classes that could be accessed in various ways in React. </p>

```
class Dinosaur(models.Model):
    name = models.CharField(max_length=50)

    class Type(models.TextChoices):
        CARNIVORE = 'Carnivore', _('Carnivore')
        HERBIVORE = 'Herbivore', _('Herbivore')
        PISCIVORE = 'Piscivore', _('Piscivore')

    type = models.CharField (
        max_length= 10,
        choices=Type.choices,
        default=Type.CARNIVORE
    )

    def is_upperclass(self):
        return self.type in {
        self.Type.CARNIVORE,
        self.Type.HERBIVORE,
    }

    danger_level = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])

  
    class Size(models.TextChoices):
        LARGE = 'Large', _('Large')
        MEDIUM = 'Medium', _('Medium')
        SMALL = 'Small', _('Small')

    size = models.CharField (
        max_length= 10,
        choices=Size.choices,
        default=Size.MEDIUM
    )

    def is_upperclass(self):
        return self.size in {
        self.Size.MEDIUM,
        self.Size.LARGE,
        }

    description = models.CharField(max_length=500)
    image = models.CharField(max_length=250)
    price = models.PositiveIntegerField(validators=[MinValueValidator(100), MaxValueValidator(10000000)])

```

```
class Misc(models.Model):
    name = models.CharField(max_length=50)

# MISC TYPE CLASS

    class Misctype(models.TextChoices):
        FOOD = 'Food', _('Food')
        TOY = 'Toy', _('Toy')

    misctype = models.CharField (
        max_length= 10,
        choices=Misctype.choices,
        default=Misctype.FOOD
    )

    def is_upperclass(self):
        return self.misctype in {
        self.Misctype.FOOD,
        self.Misctype.TOY,
        }

# DINO TYPE CLASS

    class Dinotype(models.TextChoices):
        CARNIVORE = 'Carnivore', _('Carnivore')
        HERBIVORE = 'Herbivore', _('Herbivore')
        PISCIVORE = 'Piscivore', _('Piscivore')

    dinotype = models.CharField (
        max_length= 10,
        choices=Dinotype.choices,
        default=Dinotype.CARNIVORE
    )

    def is_upperclass(self):
        return self.dinotype in {
        self.Dinotype.CARNIVORE,
        self.Dinotype.HERBIVORE,
        }

# SIZE CLASS

    class Size(models.TextChoices):
        LARGE = 'Large', _('Large')
        MEDIUM = 'Medium', _('Medium')
        SMALL = 'Small', _('Small')

    size = models.CharField (
        max_length= 10,
        choices=Size.choices,
        default=Size.MEDIUM
    )

    def is_upperclass(self):
            return self.size in {
            self.Size.MEDIUM,
            self.Size.LARGE,
            }

# DESCRIP, IMAGE AND PRICE

    description = models.CharField(max_length=500)
    image = models.CharField(max_length=250)
    price = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(100)])

```

<p>I then used Django Admin to quickly add some data sets.</p>

Login/register

<h3>Frontend</h3>

<p>The index and show pages came together swiftly- on the home page, I opted for a simplistic, bulma-styled design.

<img src="https://i.imgur.com/6QsUY2I.png" alt="DPS Home"/>

<p>The basket page followed the same idea that my colleague and I attempted in project 2- take an item, push it into a new array and then map it out on the desired page. Here, I found setting state solved our previous issue, and the desired items would now be displayed in the basket.</p>

```
const handleClick = (e) => {
    console.log(e.target.value)
    const basketItem = JSON.parse(window.localStorage.getItem('dinos')) || []
    console.log(dino)
    basketItemArray = [...basketItemArray, dino]
    basketItem.push(dino)
    localStorage.setItem('dinos', JSON.stringify(basketItem))
    console.log(basketItemArray)
    history.push('/dinosaurs')
```
```
const [basketItems, setBasketItems] = React.useState(() => JSON.parse(window.localStorage.getItem('dinos')))

```

<p>From here I added a ‘Total’ counter that displayed the combined items price, and a ‘Remove Item’ button that would affect the counter in return. I installed ‘Material-UI’ and used their button components to create a basic ‘checkout’ button.</p>

```
const totalDinoPrice = basketItems.reduce((runningTotal, item) => {
    return runningTotal + item.price
  }, 0)

  const totalMiscPrice = basketMiscItems.reduce((runningTotal, item) => {
    return runningTotal + item.price
    
  }, 0)

```

```
const handleDelete = (e) => {
    const newBasketItems = basketItems.filter((_, index) => index !== Number(e.target.value))
    localStorage.setItem('dinos', JSON.stringify(newBasketItems))
    setBasketItems(newBasketItems)
  }

  const handleMiscsDelete = (e) => {
    const newBasketItems = basketMiscItems.filter((_, index) => index !== Number(e.target.value))
    localStorage.setItem('miscs', JSON.stringify(newBasketItems))
    setBasketItems(newBasketItems)
  }

```

<p> There being two arrays, two counters and remove buttons were made- the deadline on the horizon, I’ve opted to come back to the resulting bugs later on, either to spread and combine the two arrays or refactor my code entirely.</p>

<img src="" alt="Pending Bug Fix"/>

<h3>Wins</h3>

<p>Basket: In project 2 my team and I tried to create a similar feature that we didn't quite figure out how to implement in time, so it felt quite satisfying to succeed in a solo venture this time around.</p>

<h3>Future Features</h3>

<li>Q&A page that recommends a dinosaur for you.</li>
<li>A 'related products' section for the show page of each dinosaur.</li>

<h2>Lessons learned</h2>

<li>Many of my bugs came from mistakes made in my planning, particularly my decision to use two models whereby one would have sufficed. The current solution would be to utilise a single model with expanded classes, which would reduce the problem solving required in the basket & related product apps especially. In short, Keep It Simple Stupid!</li>

<small>NOTE: This Readme will be updated over time as the bug fixes are implemented.</small>

