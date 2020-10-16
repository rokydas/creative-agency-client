import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const OrderListAdminSingle = ({ order }) => {

    const classes = useStyles();
    const [status, setStatus] = useState('');

    const handleChange = (event) => {
        setStatus(event.target.value);

        // fetch(`http://localhost:5000/updateStatus/${order.id}`, {
        //     method: 'PATCH',
        //     headers: { 'Content-type': 'application/json' },
        //     body: JSON.stringify(status)
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log('updated');
        //     })
    };


    return (
        <tr>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.productName}</td>
            <td>{order.productDetails}</td>
            <td>
                <FormControl className={classes.formControl}>
                    <Select
                        value={status}
                        onChange={handleChange}
                        displayEmpty
                        className={classes.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        {/* <MenuItem value="">
                            {order.status}
                        </MenuItem> */}
                        <MenuItem value={'Pending'}>Pending</MenuItem>
                        <MenuItem value={'Ongoing'}>Ongoing</MenuItem>
                        <MenuItem value={'Done'}>Done</MenuItem>
                    </Select>
                    <FormHelperText>Without label</FormHelperText>
                </FormControl>
            </td>
        </tr>
    );
};

export default OrderListAdminSingle;