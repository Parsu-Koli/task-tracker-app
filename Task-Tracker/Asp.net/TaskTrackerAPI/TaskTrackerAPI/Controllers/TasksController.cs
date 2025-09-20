using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskTrackerAPI.Data;
using TaskTrackerAPI.Models;

namespace TaskTrackerAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class TasksController(TaskDbContext context) : ControllerBase
  {
    private readonly TaskDbContext _context = context;

    // GET: api/tasks
    [HttpGet]
    public async Task<ActionResult<IEnumerable<TodoTask>>> GetTasks()
    {
      return await _context.Tasks.ToListAsync();
    }

    // GET: api/tasks/5
    [HttpGet("{id}")]
    public async Task<ActionResult<TodoTask>> GetTask(int id)
    {
      var task = await _context.Tasks.FindAsync(id);
      if (task == null) return NotFound();
      return task;
    }

    // POST: api/tasks
    [HttpPost]
    public async Task<ActionResult<TodoTask>> CreateTask(TodoTask task)
    {
      _context.Tasks.Add(task);
      await _context.SaveChangesAsync();
      return CreatedAtAction(nameof(GetTask), new { id = task.Id }, task);
    }

    // PUT: api/tasks/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTask(int id, TodoTask task)
    {
      if (id != task.Id) return BadRequest();

      _context.Entry(task).State = EntityState.Modified;
      await _context.SaveChangesAsync();
      return NoContent();
    }

    // DELETE: api/tasks/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTask(int id)
    {
      var task = await _context.Tasks.FindAsync(id);
      if (task == null) return NotFound();

      _context.Tasks.Remove(task);
      await _context.SaveChangesAsync();
      return NoContent();
    }
  }
}
