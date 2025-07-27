file ecs.js is currently set up to export anything—async or otherwise. There's complete packed export or module.exports statements, which means other files can directly import PetGen ECS class and update it.

✅ Exporting  ECS Class
Here’s how you can make it exportable depending on your environment:

For ES Modules (browser or modern bundlers like Vite):
`js
export default ECS;
`

For CommonJS (Node.js-style projects):
`js
module.exports = ECS;
`

💡 And if you're planning to use ECS asynchronously (maybe with dynamic imports or async methods), you can still export it the same way—export default ECS is valid even if ECS has async methods inside.

---
## 📊 Estimated Percentages: Polygon vs MonoBehaviour Usage

_Assuming general usage patterns in game development contexts (e.g. Unity or similar engines):_

| **Component**                  | **Approximate Usage** | **Common Contexts**                                                                 |
|-------------------------------|------------------------|--------------------------------------------------------------------------------------|
| Polygon (mesh rendering)      | 70–80%                 | Rendering 3D models, environments, characters; high in visually demanding projects  |
| MonoBehaviour (logic & scripts)| 20–30%                 | Game logic, interactions, behaviors; core to Unity-based systems                    |

> These percentages are broad estimates and vary heavily by project. A stylized game might be texture-heavy with fewer polygons, while a physics simulation might lean heavily on MonoBehaviour-style components.

Would you like help calculating actual polygon counts in a scene or designing your own ECS system that balances behavior and graphics? I'm here for all of it.