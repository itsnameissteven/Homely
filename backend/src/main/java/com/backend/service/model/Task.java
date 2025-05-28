package com.backend.service.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "task")
public class Task extends BaseModel<Task> {
  private String name;
  private String description;
  private Integer frequency;
  @ManyToMany
  @JoinTable(name = "task_item", joinColumns = @JoinColumn(name = "task_id"), inverseJoinColumns = @JoinColumn(name = "item_id"))
  private List<Item> items;

  public Task() {
  }

  public Task(String name, String description, Integer frequency) {
    this.name = name;
    this.description = description;
    this.frequency = frequency;
  }

  public String getName() {
    return name;
  }

  public String getDescription() {
    return description;
  }

  public Integer getFrequency() {
    return frequency;
  }

  public Task setName(String name) {
    this.name = name;
    return this;
  }

  public Task setDescription(String description) {
    this.description = description;
    return this;
  }

  public Task setFrequency(Integer frequency) {
    this.frequency = frequency;
    return this;
  }
}
