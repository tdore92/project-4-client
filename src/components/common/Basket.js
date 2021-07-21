import React from 'react'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'


function Basket() {


  //const basketItemArray = 
  //console.log(basketItemArray)


  const [open, setOpen] = React.useState(false)
  // dino basket //
  const [basketItems, setBasketItems] = React.useState(() => JSON.parse(window.localStorage.getItem('dinos')))
  // misc basket //
  const [basketMiscItems] = React.useState(() => JSON.parse(window.localStorage.getItem('miscs')))

  const totalDinoPrice = basketItems.reduce((runningTotal, item) => {
    return runningTotal + item.price
  }, 0)

  const totalMiscPrice = basketMiscItems.reduce((runningTotal, item) => {
    return runningTotal + item.price
    
  }, 0)
  console.log(totalMiscPrice)


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

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="box">
      <h1>Check Your Basket</h1>
      <section className="section">
        {basketItems ? (
          basketItems.map((item, index) => <div className="container"
            key={Math.random()}>
            <div>
              <div>
                <p>{item.name} | {item.size} {item.type}</p>
                <p>${item.price}</p>
                <div>
                  <button className="is-pulled-right" onClick={handleDelete} value={index}>Remove item</button>
                </div>
              </div>
            </div>

            <hr />
          </div>
          )
        ) : (
          <p>...loading</p>
        )}
        {basketMiscItems ? (
          basketMiscItems.map((item, index) => <div className="container"
            key={Math.random()}>
            <div>
              <div>

                <p>{item.name} | {item.misctype}</p>
                <p>${item.price}</p>
                <button className="is-pulled-right" onClick={handleMiscsDelete} value={index}>Remove item</button>
              </div>
            </div>
            <hr />
          </div>
          )
        ) : (
          <p>...loading</p>
        )}
      </section>
      <p>Total:${totalDinoPrice}</p>
      <button onClick={handleClickOpen}>Checkout</button>
      <Dialog
        open={open}
        onClose={handleClose}>
        <DialogTitle>{'Error 404'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Dinosaurs aren&apos;t real.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Oops my bad
          </Button>
        </DialogActions>
      </Dialog>


    </div>
  )
}

export default Basket