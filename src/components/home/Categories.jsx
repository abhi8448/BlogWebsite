
import { Button, makeStyles, Table, TableCell, TableRow, TableHead, TableBody } from '@material-ui/core';
import { categories } from '../../constants/Data';
import { Link } from 'react-router-dom';

const usestyle = makeStyles({
    create: {
        margin: 20,
        width: '86%',
        background: '#6495ED',
        color: '#fff'
    },
    table: {
        border: '1px solid rgba(224,224,224,1)'
    }
})

const Categories = () => {
    const classes = usestyle();
    return (
        <>
            <Link to='/create'>
                <Button variant="contained" className={classes.create}>Create Blog</Button>
            </Link>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell> All Categories </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow>
                                <TableCell> {category} </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

        </>
    )
}

export default Categories;