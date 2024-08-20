using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using WebAPIMall.Models;
using Microsoft.EntityFrameworkCore;

namespace WebAPIMall.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly MalldbContext dbcontext;

        public DepartmentController(MalldbContext _dbcontext)
        {
           dbcontext = _dbcontext;
        }

        [HttpGet]
        [Route("ListDeparments")]
        public async Task<IActionResult> Get()
        {
            var listdepartments = await dbcontext.Departments.ToListAsync();
            return StatusCode(StatusCodes.Status200OK, listdepartments);
        }

        [HttpGet]
        [Route("GetDepartment/{id:int}")]
        public async Task<IActionResult> Get(int id)
        {
            var department = await dbcontext.Departments.FirstOrDefaultAsync(e => e.IdDeparment==id);
            return StatusCode(StatusCodes.Status200OK, department);
        }

        [HttpPost]
        [Route("NewDepartment")]
        public async Task<IActionResult> New([FromBody] Department odepartment)
        {
            await dbcontext.Departments.AddAsync(odepartment);
            await dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, new {message="ok"});
        }

        [HttpPut]
        [Route("EditDepartment")]
        public async Task<IActionResult> Edit([FromBody] Department odepartment)
        {
            dbcontext.Departments.Update(odepartment);
            await dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, new { message = "ok" });
        }

        [HttpDelete]
        [Route("DeleteDepartment/{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var department = await dbcontext.Departments.FirstOrDefaultAsync(e => e.IdDeparment == id);
            dbcontext.Departments.Remove(department);
            await dbcontext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, new { message = "ok" });
        }

    }
}
