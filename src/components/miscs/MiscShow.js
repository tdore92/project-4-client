import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleItem } from '../../lib/api'
import Comments from './MiscComment'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'


function MiscShow() {

  const [open, setOpen] = React.useState(false)
  let basketItemArray = []
  const [item, setItem] = React.useState(null)
  const { id } = useParams()

  React.useEffect(() => {
    console.log('Misc show page is mounted.')
    const getData = async () => {
      try {
        const { data } = await getSingleItem(id)
        setItem(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  const handleClick = (e) => {
    console.log(e.target.value)
    const basketItem = JSON.parse(window.localStorage.getItem('items')) || []
    console.log(item)
    basketItemArray = [...basketItemArray, item]
    basketItem.push(item)
    localStorage.setItem('items', JSON.stringify(basketItem))
    console.log(basketItemArray)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      {item ? (
        <section className="">
          <div className="">
            <div className="hero"></div>
            <div className="hero-body"></div>
            <div className="columns is-centered">
              <div className="column is-5 box">
                <img src={item.image}></img>
              </div>
              <div className="column is-4">

                <div>
                  <div><div className="is-size-3">{item.name}</div>{item.size} Sized {item.type}<div className="is-pulled-right">${item.price}</div></div>
                  <hr />
                  <p>{item.description}</p>
                  <button className="is-pulled-right" type="submit" value="id" onClick={handleClick}>Add Item to Basket</button>
                  <Dialog
                    open={open}
                    onClose={handleClose}>
                    <DialogTitle></DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Item has been added to your basket.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>
                        Ok
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
                <hr />
                <div>Comments</div>
                <div className="is-pulled-right">
                  <Comments />
                </div>

              </div>
            </div>
          </div>


        </section>
      ) : (
        <p className="is-centered">...loading</p>
      )}
    </>
  )

}

export default MiscShow