package com.Backend.backend1.repository;

import com.Backend.backend1.entity.UserData;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface Mongorepo extends MongoRepository<UserData, ObjectId> {
}
