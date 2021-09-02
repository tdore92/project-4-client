import React from 'react'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'


function Basket() {

  const [open, setOpen] = React.useState(false)
  // item basket //
  const [basketItems, setBasketItems] = React.useState(() => JSON.parse(window.localStorage.getItem('items')))

  const totalPrice = basketItems.reduce((runningTotal, item) => {
    return runningTotal + item.price
  }, 0)

  const handleDelete = (e) => {
    const newBasketItems = basketItems.filter((_, index) => index !== Number(e.target.value))
    localStorage.setItem('items', JSON.stringify(newBasketItems))
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
      </section>
      <p>Total:${totalPrice}</p>
      <button onClick={handleClickOpen}>Checkout</button>
      <Dialog
        open={open}
        onClose={handleClose}>
        <DialogTitle>{'Error 404'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Dinosaurs don&apos;t exist anymore.
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