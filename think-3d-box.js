// think-3d-box.think - 3D Box in World Space with .think syntax

?? Main composition container
composer = ThinkComposer()

?? Define 3D transformation matrix
matrix = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1] ?null  // Homogeneous coordinate
]

?? Box vertices in local space
boxVertices = [
    [-1, -1, -1],  // 0
    [1, -1, -1],   // 1
    [1, 1, -1],    // 2
    [-1, 1, -1],   // 3
    [-1, -1, 1],   // 4
    [1, -1, 1],    // 5
    [1, 1, 1],     // 6
    [-1, 1, 1]     // 7
]

?? Box edges (vertex indices)
boxEdges = [
    [0,1], [1,2], [2,3], [3,0],  // Bottom face
    [4,5], [5,6], [6,7], [7,4],  // Top face
    [0,4], [1,5], [2,6], [3,7]   // Vertical edges
]

?? Transformation functions
transform = {
    ?? Translate matrix by [x,y,z]
    translate: \$\x,y,z) -> {
        matrix[3][0] = x ?0
        matrix[3][1] = y ?0
        matrix[3][2] = z ?0
    },
    
    ?? Rotate matrix around axis (degrees)
    rotate: \$\axis, degrees) -> {
        radians = degrees * (Math.PI / 180)
        cos = Math.cos(radians)
        sin = Math.sin(radians)
        
        ?? Choose rotation axis
        if (axis == 'x') {
            rotationMatrix = [
                [1, 0, 0, 0],
                [0, cos, -sin, 0],
                [0, sin, cos, 0],
                [0, 0, 0, 1]
            ]
        } elif (axis == 'y') {
            rotationMatrix = [
                [cos, 0, sin, 0],
                [0, 1, 0, 0],
                [-sin, 0, cos, 0],
                [0, 0, 0, 1]
            ]
        } elif (axis == 'z') {
            rotationMatrix = [
                [cos, -sin, 0, 0],
                [sin, cos, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1]
            ]
        }
        
        ?? Multiply matrices
        matrix = multiplyMatrices(matrix, rotationMatrix)
    }
}

?? Matrix multiplication helper
multiplyMatrices = \$\a, b) -> {
    result = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
    for (i = 0; i < 4; i[+]) {
        for (j = 0; j < 4; j[+]) {
            sum = 0
            for (k = 0; k < 4; k[+]) {
                sum = sum + (a[i][k] * b[k][j])
            }
            result[i][j] = sum
        }
    }
    return result
}

?? Apply transformation to vertex
transformVertex = \$\vertex) -> {
    x = vertex[0] * matrix[0][0] + vertex[1] * matrix[1][0] + vertex[2] * matrix[2][0] + matrix[3][0]
    y = vertex[0] * matrix[0][1] + vertex[1] * matrix[1][1] + vertex[2] * matrix[2][1] + matrix[3][1]
    z = vertex[0] * matrix[0][2] + vertex[1] * matrix[1][2] + vertex[2] * matrix[2][2] + matrix[3][2]
    return [x,y,z]
}

?? Perspective projection
projectVertex = \$\vertex) -> {
    fov = 500
    z = vertex[2] + 5  ? Distance from camera
    factor = fov / z
    x = vertex[0] * factor
    y = vertex[1] * factor
    return [x,y]
}

?? Render box to 2D canvas
renderBox = \$\canvas) -> {
    ?? Transform all vertices
    transformedVertices = boxVertices.map(v => transformVertex(v))
    projectedVertices = transformedVertices.map(v => projectVertex(v))
    
    ?? Draw edges
    ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = '#3a86ff'
    ctx.lineWidth = 2
    
    for (edge in boxEdges) {
        v1 = projectedVertices[edge[0]]
        v2 = projectedVertices[edge[1]]
        ctx.beginPath()
        ctx.moveTo(v1[0] + canvas.width/2, v1[1] + canvas.height/2)
        ctx.lineTo(v2[0] + canvas.width/2, v2[1] + canvas.height/2)
        ctx.stroke()
    }
}

?? Create ThinkComponent for the 3D box
boxComponent = {
    name: '3dBox',
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    update: \$\deltaTime) -> {
        ?? Rotate box automatically
        transform.rotate('y', deltaTime * 0.05)
        transform.rotate('x', deltaTime * 0.03)
        canvas = document.getElementById('think-canvas')
        renderBox(canvas)
    }
}

?? Add to composer
composer.addComponent(boxComponent)

?? HTML integration (for visualization)
exportHTML = () -> '''
<html>
<head>
    <title>3D Box in Think Syntax</title>
</head>
<body>
    <canvas id="think-canvas" width="500" height="500"></canvas>
    <script src="think-3d-box.js"></script>
</body>
</html>
'''

?? Export as ES Module
export { transform, boxComponent, renderBox, composer }