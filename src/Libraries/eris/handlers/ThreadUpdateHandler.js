import AHandler from '../../../Core/Event/AHandler';

class ThreadUpdateHandler extends AHandler {
    handle(thread) {
        return thread.id;
    }
}

export default ThreadUpdateHandler;
