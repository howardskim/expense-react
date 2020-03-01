const Transaction = require('../models/Transaction');

//@desc GET all transactions
//@route GET /api/v1/transactions

exports.getTransactions = async (req, res, next) => {
    try{
        const transactions = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    } catch (err){
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

//@desc Add transaction
//@route POST
exports.addTransaction = async (req, res, next) => {
    try {

        // const { text, amount } = req.body;
        // const newTrans = new Transaction({
        //     text,
        //     amount
        // });
        // newTrans.save(function(err, post) {
        //   if (err) {
        //     return next(err);
        //   }
        //   res.json(201, post);
        // });
        
        const { text, amount} = req.body;
        const transaction = await Transaction.create(req.body);
        return res.status(201).json({
            success: true,
            data: transaction
        })

    } catch(err){
        if(err.name === 'ValidationError'){
           const messages = Object.values(err.errors).map((val) =>{
               return val.message
           });
           return res.status(400).json({
               success: false,
               messages
           })
        }
        return res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
}

exports.deleteTransaction = async (req, res, next) => {
    // console.log('req.body ', req.url.slice(1));
    // const id = req.url.slice(1);
    // await Transaction.findByIdAndDelete(id, function(err) {
    //   if (err) res.status(500)
    //   return res.status(200).json({
    //     success: true
    //   });
    // });
    console.log(req.params)
    try {
        const transaction = await Transaction.findById(req.params.id);
        if(!transaction){
            return res.status(404).json({
                success: false,
                error: 'No item found'
            })
        };
        await transaction.remove();
        return res.status(200).json({
            success: true,
            data: transaction
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}