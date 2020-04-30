const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=> {
    res.status(200).json({
        message : "task fetched"
    }); 
});

router.post('/', (req, res, next)=> {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message : "task created",
        createdOrder: order

    }); 
});


router.get('/:taskId', (req, res, next)=> {
    res.status(200).json({
        message : "get task",
        orderId: req.params.orderId
    }); 
});

router.put('/:taskId', (req, res, next)=> {
    res.status(200).json({
        message : "updated task"
    }); 
});

router.delete('/:taskId', (req, res, next)=> {
    res.status(200).json({
        message : "deleted task"
    }); 
});

module.exports= router;