#version 330 core

in vec3 FinalColor;

out vec4 FragColor;

void main()
{
	FragColor = vec4(FinalColor, 1.0);
}