import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messageRepo: MessagesRepository;
  constructor() {
    // DO NOT USE IT IN REAL APP
    // USE DI (DEPENEDENCY INJECTION)
    this.messageRepo = new MessagesRepository();
  }
  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }
  findAll() {
    return this.messageRepo.findAll();
  }
  create(content: string) {
    return this.messageRepo.createOne(content);
  }
}
