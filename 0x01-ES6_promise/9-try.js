export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const value = mathFunction();
    queue.push(value);
    queue.push('Guardrail was processed');
  } catch {
    queue.push('Error: cannot divide by 0');
    queue.push('Guardrail was processed');
  }
  return queue;
}
