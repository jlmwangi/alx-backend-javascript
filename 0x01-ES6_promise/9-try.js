export default function guardrail(mathFunction) {
  let queue = [];

  try {
    let value = mathFunction();
    queue.push(value);
    queue.push('Guardrail was processed');
  } catch (error) {
    queue.push(error);
    queue.push('Guardrail was processed');
  }
  return queue;
}
