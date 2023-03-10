
// using multer for disk storage

export const storage=multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, '../frontEnd/public/upload/')
    },
    filename:function(req, file, cb){
        cb(null, Date.now() + file.originalname)
    }
})