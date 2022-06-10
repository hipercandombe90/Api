//4
import {Router} from 'express'
//import { route } from 'express/lib/application';
import * as TaskCtrl from '../controllers/task.controller.mjs'
const router = Router()

router.get('/',TaskCtrl.findAllTask);

router.post('/', TaskCtrl.createTask);

// api/tasks/done
router.get('/done', TaskCtrl.findAllDoneTasks);

// api/tasks/id
router.get('/:id', TaskCtrl.findOneTask);

// api/tasks/id
router.delete('/:id', TaskCtrl.deleteTask);

router.put('/:id', TaskCtrl.updateTask);

export default router;