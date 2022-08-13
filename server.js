import express, { urlencoded } from 'express';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
import mysql from 'mysql';

import multer from 'multer';
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './public/Mobiles')
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage });

//create mysql connection
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'mobilestore',
    password : '',
    multipleStatements: true
});
//connect
connection.connect((err)=>{
    if(err){
        throw err;
    }
    else{
        console.log('MySql is connected...')
    }
    
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.use(urlencoded({ extended : true}));
app.use(express.static('./public'));

app.post('/buy', (req, res)=>{

    let insertOrder = `INSERT INTO orders (product_name, person_name, phone, email, address, quantity, image, price) VALUES ('${req.body.title}','${req.body.fullname}','${req.body.phone}','${req.body.email}','${req.body.address}','${req.body.quantity}','${req.body.image}','${req.body.price}');`;
    connection.query(insertOrder, (err,result)=>{
        if (err) {
            throw err;
        }
        else{
            console.log('new order inserted to database!')
        }
    })
    console.log(req.body.price)

    setTimeout(()=>{
        res.sendFile(path.join(__dirname,'public/index.html'));
    },2400)
});
app.get('/getorders',(req, res)=>{
    let getOrders = 'SELECT * FROM orders;';
    let selectedOrders = '';
    connection.query(getOrders, (err, result)=>{
        if (err) {
            throw err;
        }
        else{
            selectedOrders = result;
        }
        res.send(selectedOrders);
    })
});
app.post('/deleteorder',(req,res)=>{
    let deleteOrder = `DELETE FROM orders WHERE id='${req.body.id}';`;
    connection.query(deleteOrder, (err,result)=>{
        if(err){
            throw err;
        }
        else{
            console.log('order deleted');
        }
    })
})

app.post('/contact',(req,res)=>{
    let insertMessage = `INSERT INTO messages (name, subject, email, message) VALUES ('${req.body.name}','${req.body.subject}','${req.body.email}','${req.body.message}');`
    connection.query(insertMessage,(err,result)=>{
        if(err){
            throw err;
        }
        else{
            console.log('Mail inserted to database!');
        }
    })
    
    res.sendFile(path.join(__dirname,'./messageSent.html'))
});
app.get('/getcontact', (req,res)=>{
    const gettMessages = 'SELECT * FROM messages;';
    let selectedMessages = '';
    connection.query(gettMessages, (err,result)=>{
        if(err){
            throw err;
        }
        else{
            selectedMessages = result;
            
        }
        res.send(selectedMessages)
    })
})
//Adding Products
app.post('/addproduct', upload.single('image'),(req,res)=>{
    let insertProduct = `INSERT INTO new_products (product_name, product_image, description, price) VALUES ("${req.body.title}","Mobiles/${req.file.originalname}","${req.body.description}","${req.body.price}");`
    connection.query(insertProduct,(err,result)=>{
        if(err){
            throw err;
        }
        else{
            console.log('New product inserted to database!');
        }
    })

    res.sendFile(path.join(__dirname,'./public/AdminPanel.html'));
})
app.post('/addother', upload.single('image'),(req,res)=>{
    let insertProduct = `INSERT INTO new_other_products (product_name, product_image, description, price) VALUES ("${req.body.title}","Mobiles/${req.file.originalname}","${req.body.description}","${req.body.price}");`
    connection.query(insertProduct,(err,result)=>{
        if(err){
            throw err;
        }
        else{
            console.log('New product inserted to database!');
        }
    })

    res.sendFile(path.join(__dirname,'./public/AdminPanel.html'));
})

app.get('/getproduct',(req, res)=>{
    let getProducts = 'SELECT * FROM new_products;';
    let selectedProducts = '';
    connection.query(getProducts, (err, result)=>{
        if (err) {
            throw err;
        }
        else{
            selectedProducts = result;
        }

        res.send(selectedProducts);
    })
});
app.get('/getothers',(req, res)=>{
    let getProducts = 'SELECT * FROM new_other_products;';
    let selectedProducts = '';
    connection.query(getProducts, (err, result)=>{
        if (err) {
            throw err;
        }
        else{
            selectedProducts = result;
        }

        res.send(selectedProducts);
    })
});

/////////////////////Login to Admin Panel///////////////////////
app.use(express.static('./public/Login'));
const userName = 'admin';
const adminPassword = 'admin123';

app.post('/admin',(req,res)=>{
    if(req.body.pass === 'admin123'){
        res.sendFile(path.join(__dirname,'public/AdminPanel.html'));
    }
    else{
        res.send('Please Enter Correct Password');
    }
})

//Creating route for Login page
app.get('/admin', (req,res)=>{
    res.sendFile(path.join(__dirname,'./public/Login/index.html'));
})

///NewsLetter///
app.post('/newsletter',(req,res)=>{
    let insertEmail = `INSERT INTO newsletter (email) VALUES ("${req.body.email}");`
    connection.query(insertEmail,(err,result)=>{
        if(err){
            throw err;
        }
        else{
            console.log('New email address inserted to database!');
        }
    })
    res.status(204).send();
});

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`Server is running`);
});
