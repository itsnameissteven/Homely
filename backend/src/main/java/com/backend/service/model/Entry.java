package com.backend.service.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "entry")
public class Entry extends BaseModel<Entry> {
  @ManyToOne
  @JoinColumn(name = "task_id")
  private Task task;

  @ManyToOne
  @JoinColumn(name = "user_id")
  private User user;

  private LocalDateTime dueBy;
  private Boolean isComplete;
  private Boolean isEod;

  public Entry() {
  }

  public Entry(LocalDateTime dueBy, Boolean isComplete, Boolean isEod) {
    this.dueBy = dueBy;
    this.isComplete = isComplete;
    this.isEod = isEod;
  }

  public LocalDateTime getDueBy() {
    return dueBy;
  }

  public Boolean getIsComplete() {
    return isComplete;
  }

  public Boolean getIsEod() {
    return isEod;
  }

  public Entry setDueBy(LocalDateTime dueBy) {
    this.dueBy = dueBy;
    return this;
  }

  public Entry setIsComplete(Boolean isComplete) {
    this.isComplete = isComplete;
    return this;
  }

  public Entry setIsEod(Boolean isEod) {
    this.isEod = isEod;
    return this;
  }
}