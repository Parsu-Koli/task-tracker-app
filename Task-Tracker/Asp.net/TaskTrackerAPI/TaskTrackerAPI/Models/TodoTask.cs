namespace TaskTrackerAPI.Models
{
  public class TodoTask
  {
    public int Id { get; set; }  // Primary key
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public bool IsCompleted { get; set; } = false;
    public DateTime CreatedAt { get; set; } = DateTime.Now;
  }
}
