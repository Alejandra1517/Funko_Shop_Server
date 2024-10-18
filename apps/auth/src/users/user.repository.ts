import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { UserDocument } from './models/user.schema';

@Injectable()
export class UserRepository extends AbstractRepository<UserDocument> {
  protected readonly logger = new Logger(UserRepository.name);
  constructor(
    @InjectModel(UserDocument.name)
    protected readonly userModel: Model<UserDocument>,
  ) {
    super(userModel);
  }
}


// import { Injectable, Logger } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { AbstractRepository } from '@app/common';
// import { UserDocument } from './models/user.schema';

// @Injectable()
// export class UserRepository extends AbstractRepository<UserDocument> {
//   protected readonly logger = new Logger(UserRepository.name);

//   constructor(
//     @InjectRepository(UserDocument.name)
//     protected readonly userRepository: Repository<UserDocument>,
//   ) {
//     super(userRepository);
//   }

// }
