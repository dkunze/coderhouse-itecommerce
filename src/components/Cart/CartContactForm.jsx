import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    alignRight: {
        textAlign: 'right',
        fontWeight: 700
    },
    cardPadding: {
        padding: '20px',
        margin: 'auto'
    }
})


const CartContactForm = (props) => {
    const { handleOnSubmit, handleOnChange, formData, handleDisabledBtn } = props
    const classes = useStyles()
    return (

        <div className={classes.cardPadding + ' d-flex justify-content-center card col-6 mt-5 bg-light'}>
            <h3>Complete the Order</h3>
            <form onSubmit={handleOnSubmit} onChange={handleOnChange}>
                <div className='form-group row'>
                    <label className={classes.alignRight + ' col-sm-3 col-form-label'}>Full Name *</label>
                    <div className='col-sm-9'>
                        <input type='text' name='name' className='form-control' defaultValue={formData.name} placeholder='Your name' autoComplete='off' />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className={classes.alignRight + ' col-sm-3 col-form-label'}>Phone number * </label>
                    <div className='col-sm-9'>
                        <input type='number' name='phone' className='form-control' defaultValue={formData.phone} placeholder='Your phone number' autoComplete='off' />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className={classes.alignRight + ' col-sm-3 col-form-label'}>E-mail *</label>
                    <div className='col-sm-9'>
                        <input type='email' name='email' className='form-control' defaultValue={formData.email} placeholder='Your email' autoComplete='off' />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className={classes.alignRight + ' col-sm-3 col-form-label'}>Repeat E-mail *</label>
                    <div className='col-sm-9'>
                        <input type='email' name='repeat_email' className='form-control' defaultValue={formData.repeat_email} placeholder='Repeat your email' autoComplete='off' />
                    </div>
                </div>
                <div className="mt-2">
                    <button disabled={handleDisabledBtn()} className="btn btn-success">Complete Order</button>
                </div>
            </form>
        </div>
    )
}

export default CartContactForm