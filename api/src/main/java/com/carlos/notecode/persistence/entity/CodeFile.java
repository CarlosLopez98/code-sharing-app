package com.carlos.notecode.persistence.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@Entity
@Table(name = "codefiles")
public class CodeFile {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String filename;

    @Column(name = "file_path")
    private String filePath;

    @Column(name = "uploaded_at")
    private LocalDateTime uploadedAt;

    public CodeFile() {
        this.uploadedAt = LocalDateTime.now();
    }
}
