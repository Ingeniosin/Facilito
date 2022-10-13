using DynamicApi;
using DynamicApi.Manager.Api;
using DynamicApi.Manager.Api.Stored;
using Facilito.Models;

var builder = WebApplication.CreateBuilder(args);

new DynamicApi<ApplicationDbContext>(new List<IApiManager>{
    
}, builder).Start();