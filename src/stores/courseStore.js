import { EventEmitter } from 'events';
import dispatcher from '../appDispatcher';
import ACTION_TYPES from '../actions/actionTypes';
import { toast } from 'react-toastify';

const CHANGE_EVENT = 'change';
let _courses = [];

class CourseStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getCourses() {
        return _courses;
    }

    getCourseBySlug(slug) {
        return _courses.find(course => course.slug === slug);
    }
}

const store = new CourseStore();

dispatcher.register(action => {
    switch(action.actionType) {
        case ACTION_TYPES.CREATE_COURSE:
            _courses.push(action.course);
            store.emitChange();
            break;

        case ACTION_TYPES.UPDATE_COURSE:
            _courses = _courses.map(
                course => course.id === action.course.id ? action.course : course
            );
            store.emitChange();
            break;


        case ACTION_TYPES.DELETE_COURSE:
            _courses = _courses.filter(
                course => course.id !== parseInt(action.id, 10)
            );
            store.emitChange();
            toast.success('Success! The course was removed successfully.');
            break;

        case ACTION_TYPES.LOAD_COURSES:
            _courses = action.courses;
            store.emitChange();
            break;
        default:
            // Nothing to do here
    }
})

export default store;