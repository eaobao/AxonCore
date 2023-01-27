import AHandler from '../../../Core/Event/AHandler';

class ThreadCreateHandler extends AHandler {
    handle(thread) {
        return thread.id;
    }
}

export default ThreadCreateHandler;
