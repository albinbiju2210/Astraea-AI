using Microsoft.AspNetCore.Mvc;

namespace Astraea.Api.Controllers
{
    [ApiController]
    [Route("api/system")]
    public class SystemController : ControllerBase
    {
        [HttpGet("ping")]
        public IActionResult Ping()
        {
            return Ok(new { status = "pong" });
        }

        [HttpGet("version")]
        public IActionResult Version()
        {
            return Ok(new { version = "1.0.0" });
        }

        [HttpGet("health")]
        public IActionResult Health()
        {
            return Ok(new { status = "healthy" });
        }
    }
}
