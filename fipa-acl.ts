// ═══════════════════════════════════════════════════════════════════════════
// @amlhubs/fipa-acl — IEEE FIPA Agent Communication Language
// ───────────────────────────────────────────────────────────────────────────
// Authoritative spec set:
//   - FIPA SC00061G — ACL Message Structure Specification (2002-12-06)
//     http://www.fipa.org/specs/fipa00061/SC00061G.html
//   - FIPA SC00037J — Communicative Act Library Specification (2002-12-03)
//     http://www.fipa.org/specs/fipa00037/SC00037J.html
//   - FIPA SC00008I — SL Content Language Specification (2002-12-03)
//     http://www.fipa.org/specs/fipa00008/SC00008I.html
//
// Authority: IEEE Computer Society Standards Activities Board (FIPA Standards
//   Committee since 2005).
//
// Scope (v0.0.1):
//   - 22 performatives (SC00037J §3.1–§3.22) as IEnumeration + 22 IEnumerationLiteral
//   - 13-field ACLMessage envelope (SC00061G §3) as IClass + 13 IProperty
//   - AgentIdentifier (SC00061G §3.5) as IClass with name / addresses / resolvers
//   - ContentExpression algebra (SC00008I §2) as abstract IClass + concrete subclasses
//     connected by IGeneralization (Proposition / ActionExpression /
//     IdentifyingReferenceExpression with their respective subgrammars)
//   - SLProfile (SC00008I §2.1) as IEnumeration with SL0 / SL1 / SL2 literals;
//     v0.0.1 covers SL0 in full; SL1 / SL2 reserved for subsequent rounds
//   - One IConstraint per performative carrying the Feasibility Precondition (FP)
//     and the Rational Effect (RE) as IOpaqueExpression bodies, quoted verbatim
//
// CMOF compliance:
//   Every metaclass declared in this file roots in a UML 2.5.1 metaclass imported
//   from @amlhubs/uml. The CMOF 26-metaclass whitelist is respected — no metaclass
//   outside the whitelist is introduced.
//
// Architectural ordering:
//   @amlhubs/uml (root) ──upstream──► @amlhubs/fipa-acl (this package)
//   @amlhubs/sbvr ──upstream──► @amlhubs/fipa-acl (modal formulations as content)
//   @amlhubs/ocl  ──upstream──► @amlhubs/fipa-acl (alternate constraint body)
//
// JSDoc citation discipline:
//   Every interface and class JSDoc block declares @standard, @specification,
//   @section, @metaclass, @generalization, @definition, and the appropriate
//   @ownedAttributes / @associationEnds / @operations / @constraints tags.
//   Constraint bodies (FP, RE) are quoted VERBATIM from the SC00037J source —
//   never paraphrased.
// ═══════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// FIPA ACL METACLASSES (authored across 5 implementer waves)
// ═══════════════════════════════════════════════════════════════════════════
// BEGIN-EXTRACTED-FIPA-ACL

// (Implementers INSERT below this banner. Do not rewrite the header. Maintain
//  ordering: PerformativeKind → ACLMessage → AgentIdentifier → ContentExpression
//  → Proposition algebra → ActionExpression algebra → IdentifyingReference
//  algebra → SLProfile → Performative Constraints (FP + RE).)
