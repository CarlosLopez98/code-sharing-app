package com.carlos.notecode.persistence.mapper;

import com.carlos.notecode.domain.dto.CodeFileDTO;
import com.carlos.notecode.persistence.entity.CodeFile;

public class CodeFileMapper {
    public static CodeFileDTO toDto(CodeFile codeFile) {
        return CodeFileDTO.builder()
                .id(codeFile.getId().toString())
                .filename(codeFile.getFilename())
                .uploadedAt(codeFile.getUploadedAt().toString())
                .build();
    }
}
