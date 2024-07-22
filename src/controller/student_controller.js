const dbconnection=require('../Database_config')



exports.getallstudents=async(req,res)=>{
   try {
    const students = await dbconnection.query('SELECT * FROM student');
    res.status(200).send({ 
        success:true,
        data:students[0],
        message: 'success'
   })
   } catch (error) {
    res.status(500).send({
        success:false,
        data:[],
        message:error.stack
   })
   }
}

exports.savestudent= async(req,res) => {
    try {
        let{name,sex}=req.body;
        let id = req.query.id;
        const student = await dbconnection.query(
            "UPDATE student SET name=?,sex=? WHERE id=?", 
            [name,sex,id]
        );
      const updatestudent=await dbconnection.querry(
        "SELECT*FROM student WHERE id =?",
        [id]
      );
            res.status(201).send({
                success: true,
                data: student,
                message: 'successfully saved'
    })
    } 
    catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
        
    }
}

exports.deletestudents= async(req,res) => {
    try {
        let id = req.params.id;
        const student = await dbconnection.query(
            "DELETE FROM student WHERE id=?",
            [name,sex,id]
        );
      const updatestudent=await dbconnection.querry(
        "SELECT*FROM student WHERE id =?",
        [id]
      );
            res.status(201).send({
                success: true,
                data: student,
                message: 'successfully Delete' +id
    })
    } 
    catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
        
    }
}