import AHandler from '../../../Core/Event/AHandler';

class InteractionCreateHandler extends AHandler {
    handle(guild) {
        return guild.id;
    }
}

export default InteractionCreateHandler;
