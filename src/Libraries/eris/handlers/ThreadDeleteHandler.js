import AHandler from '../../../Core/Event/AHandler';

class ThreadDeleteHandler extends AHandler {
    handle(thread) {
        return thread.id;
    }
}

export default ThreadDeleteHandler;
