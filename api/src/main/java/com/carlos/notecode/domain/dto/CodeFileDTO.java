package com.carlos.notecode.domain.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CodeFileDTO {
    private String id;
    private String filename;
    private String uploadedAt;
}
