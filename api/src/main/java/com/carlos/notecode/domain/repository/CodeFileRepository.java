package com.carlos.notecode.domain.repository;

import com.carlos.notecode.persistence.crud.CodeFileCrudRepository;
import com.carlos.notecode.persistence.entity.CodeFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public class CodeFileRepository {
    @Autowired
    private CodeFileCrudRepository codeFileCrudRepository;

    public Optional<CodeFile> getByCodeFileId(String id) {
        return codeFileCrudRepository.findById(UUID.fromString(id));
    }

    public CodeFile create(CodeFile file) {
        return codeFileCrudRepository.save(file);
    }
}
