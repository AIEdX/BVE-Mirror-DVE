export function RegisterVertexSnippets(builder) {
    builder.snippets.create("standard_position", {
        GLSL: `
    vec4 worldPosition = world * vec4(position, 1.0);
    gl_Position = viewProjection * world * vec4(position, 1.0); 
    `,
    });
}
