
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserSchema
 * 
 */
export type UserSchema = $Result.DefaultSelection<Prisma.$UserSchemaPayload>
/**
 * Model ClientSchema
 * 
 */
export type ClientSchema = $Result.DefaultSelection<Prisma.$ClientSchemaPayload>
/**
 * Model ProfileSchema
 * 
 */
export type ProfileSchema = $Result.DefaultSelection<Prisma.$ProfileSchemaPayload>
/**
 * Model JobSchema
 * 
 */
export type JobSchema = $Result.DefaultSelection<Prisma.$JobSchemaPayload>
/**
 * Model ApplyJob
 * 
 */
export type ApplyJob = $Result.DefaultSelection<Prisma.$ApplyJobPayload>
/**
 * Model AcceptedProject
 * 
 */
export type AcceptedProject = $Result.DefaultSelection<Prisma.$AcceptedProjectPayload>
/**
 * Model BankSchema
 * 
 */
export type BankSchema = $Result.DefaultSelection<Prisma.$BankSchemaPayload>
/**
 * Model WalletSchema
 * 
 */
export type WalletSchema = $Result.DefaultSelection<Prisma.$WalletSchemaPayload>
/**
 * Model CompletedPoject
 * 
 */
export type CompletedPoject = $Result.DefaultSelection<Prisma.$CompletedPojectPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserSchemas
 * const userSchemas = await prisma.userSchema.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserSchemas
   * const userSchemas = await prisma.userSchema.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userSchema`: Exposes CRUD operations for the **UserSchema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSchemas
    * const userSchemas = await prisma.userSchema.findMany()
    * ```
    */
  get userSchema(): Prisma.UserSchemaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientSchema`: Exposes CRUD operations for the **ClientSchema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientSchemas
    * const clientSchemas = await prisma.clientSchema.findMany()
    * ```
    */
  get clientSchema(): Prisma.ClientSchemaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profileSchema`: Exposes CRUD operations for the **ProfileSchema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfileSchemas
    * const profileSchemas = await prisma.profileSchema.findMany()
    * ```
    */
  get profileSchema(): Prisma.ProfileSchemaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobSchema`: Exposes CRUD operations for the **JobSchema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobSchemas
    * const jobSchemas = await prisma.jobSchema.findMany()
    * ```
    */
  get jobSchema(): Prisma.JobSchemaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applyJob`: Exposes CRUD operations for the **ApplyJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplyJobs
    * const applyJobs = await prisma.applyJob.findMany()
    * ```
    */
  get applyJob(): Prisma.ApplyJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.acceptedProject`: Exposes CRUD operations for the **AcceptedProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AcceptedProjects
    * const acceptedProjects = await prisma.acceptedProject.findMany()
    * ```
    */
  get acceptedProject(): Prisma.AcceptedProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bankSchema`: Exposes CRUD operations for the **BankSchema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankSchemas
    * const bankSchemas = await prisma.bankSchema.findMany()
    * ```
    */
  get bankSchema(): Prisma.BankSchemaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.walletSchema`: Exposes CRUD operations for the **WalletSchema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WalletSchemas
    * const walletSchemas = await prisma.walletSchema.findMany()
    * ```
    */
  get walletSchema(): Prisma.WalletSchemaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.completedPoject`: Exposes CRUD operations for the **CompletedPoject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompletedPojects
    * const completedPojects = await prisma.completedPoject.findMany()
    * ```
    */
  get completedPoject(): Prisma.CompletedPojectDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserSchema: 'UserSchema',
    ClientSchema: 'ClientSchema',
    ProfileSchema: 'ProfileSchema',
    JobSchema: 'JobSchema',
    ApplyJob: 'ApplyJob',
    AcceptedProject: 'AcceptedProject',
    BankSchema: 'BankSchema',
    WalletSchema: 'WalletSchema',
    CompletedPoject: 'CompletedPoject'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userSchema" | "clientSchema" | "profileSchema" | "jobSchema" | "applyJob" | "acceptedProject" | "bankSchema" | "walletSchema" | "completedPoject"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserSchema: {
        payload: Prisma.$UserSchemaPayload<ExtArgs>
        fields: Prisma.UserSchemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSchemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSchemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload>
          }
          findFirst: {
            args: Prisma.UserSchemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSchemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload>
          }
          findMany: {
            args: Prisma.UserSchemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload>[]
          }
          create: {
            args: Prisma.UserSchemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload>
          }
          createMany: {
            args: Prisma.UserSchemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSchemaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload>[]
          }
          delete: {
            args: Prisma.UserSchemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload>
          }
          update: {
            args: Prisma.UserSchemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload>
          }
          deleteMany: {
            args: Prisma.UserSchemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSchemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSchemaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload>[]
          }
          upsert: {
            args: Prisma.UserSchemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSchemaPayload>
          }
          aggregate: {
            args: Prisma.UserSchemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSchema>
          }
          groupBy: {
            args: Prisma.UserSchemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSchemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSchemaCountArgs<ExtArgs>
            result: $Utils.Optional<UserSchemaCountAggregateOutputType> | number
          }
        }
      }
      ClientSchema: {
        payload: Prisma.$ClientSchemaPayload<ExtArgs>
        fields: Prisma.ClientSchemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientSchemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientSchemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload>
          }
          findFirst: {
            args: Prisma.ClientSchemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientSchemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload>
          }
          findMany: {
            args: Prisma.ClientSchemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload>[]
          }
          create: {
            args: Prisma.ClientSchemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload>
          }
          createMany: {
            args: Prisma.ClientSchemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientSchemaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload>[]
          }
          delete: {
            args: Prisma.ClientSchemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload>
          }
          update: {
            args: Prisma.ClientSchemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload>
          }
          deleteMany: {
            args: Prisma.ClientSchemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientSchemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientSchemaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload>[]
          }
          upsert: {
            args: Prisma.ClientSchemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientSchemaPayload>
          }
          aggregate: {
            args: Prisma.ClientSchemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientSchema>
          }
          groupBy: {
            args: Prisma.ClientSchemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientSchemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientSchemaCountArgs<ExtArgs>
            result: $Utils.Optional<ClientSchemaCountAggregateOutputType> | number
          }
        }
      }
      ProfileSchema: {
        payload: Prisma.$ProfileSchemaPayload<ExtArgs>
        fields: Prisma.ProfileSchemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileSchemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileSchemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload>
          }
          findFirst: {
            args: Prisma.ProfileSchemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileSchemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload>
          }
          findMany: {
            args: Prisma.ProfileSchemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload>[]
          }
          create: {
            args: Prisma.ProfileSchemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload>
          }
          createMany: {
            args: Prisma.ProfileSchemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileSchemaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload>[]
          }
          delete: {
            args: Prisma.ProfileSchemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload>
          }
          update: {
            args: Prisma.ProfileSchemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload>
          }
          deleteMany: {
            args: Prisma.ProfileSchemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileSchemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileSchemaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload>[]
          }
          upsert: {
            args: Prisma.ProfileSchemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileSchemaPayload>
          }
          aggregate: {
            args: Prisma.ProfileSchemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfileSchema>
          }
          groupBy: {
            args: Prisma.ProfileSchemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileSchemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileSchemaCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileSchemaCountAggregateOutputType> | number
          }
        }
      }
      JobSchema: {
        payload: Prisma.$JobSchemaPayload<ExtArgs>
        fields: Prisma.JobSchemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobSchemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobSchemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload>
          }
          findFirst: {
            args: Prisma.JobSchemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobSchemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload>
          }
          findMany: {
            args: Prisma.JobSchemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload>[]
          }
          create: {
            args: Prisma.JobSchemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload>
          }
          createMany: {
            args: Prisma.JobSchemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobSchemaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload>[]
          }
          delete: {
            args: Prisma.JobSchemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload>
          }
          update: {
            args: Prisma.JobSchemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload>
          }
          deleteMany: {
            args: Prisma.JobSchemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobSchemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobSchemaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload>[]
          }
          upsert: {
            args: Prisma.JobSchemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSchemaPayload>
          }
          aggregate: {
            args: Prisma.JobSchemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobSchema>
          }
          groupBy: {
            args: Prisma.JobSchemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobSchemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobSchemaCountArgs<ExtArgs>
            result: $Utils.Optional<JobSchemaCountAggregateOutputType> | number
          }
        }
      }
      ApplyJob: {
        payload: Prisma.$ApplyJobPayload<ExtArgs>
        fields: Prisma.ApplyJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplyJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplyJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload>
          }
          findFirst: {
            args: Prisma.ApplyJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplyJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload>
          }
          findMany: {
            args: Prisma.ApplyJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload>[]
          }
          create: {
            args: Prisma.ApplyJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload>
          }
          createMany: {
            args: Prisma.ApplyJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplyJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload>[]
          }
          delete: {
            args: Prisma.ApplyJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload>
          }
          update: {
            args: Prisma.ApplyJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload>
          }
          deleteMany: {
            args: Prisma.ApplyJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplyJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplyJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload>[]
          }
          upsert: {
            args: Prisma.ApplyJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplyJobPayload>
          }
          aggregate: {
            args: Prisma.ApplyJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplyJob>
          }
          groupBy: {
            args: Prisma.ApplyJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplyJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplyJobCountArgs<ExtArgs>
            result: $Utils.Optional<ApplyJobCountAggregateOutputType> | number
          }
        }
      }
      AcceptedProject: {
        payload: Prisma.$AcceptedProjectPayload<ExtArgs>
        fields: Prisma.AcceptedProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcceptedProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcceptedProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedProjectPayload>
          }
          findFirst: {
            args: Prisma.AcceptedProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcceptedProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedProjectPayload>
          }
          findMany: {
            args: Prisma.AcceptedProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedProjectPayload>[]
          }
          create: {
            args: Prisma.AcceptedProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedProjectPayload>
          }
          createMany: {
            args: Prisma.AcceptedProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AcceptedProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedProjectPayload>[]
          }
          delete: {
            args: Prisma.AcceptedProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedProjectPayload>
          }
          update: {
            args: Prisma.AcceptedProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedProjectPayload>
          }
          deleteMany: {
            args: Prisma.AcceptedProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcceptedProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AcceptedProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedProjectPayload>[]
          }
          upsert: {
            args: Prisma.AcceptedProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedProjectPayload>
          }
          aggregate: {
            args: Prisma.AcceptedProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcceptedProject>
          }
          groupBy: {
            args: Prisma.AcceptedProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcceptedProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcceptedProjectCountArgs<ExtArgs>
            result: $Utils.Optional<AcceptedProjectCountAggregateOutputType> | number
          }
        }
      }
      BankSchema: {
        payload: Prisma.$BankSchemaPayload<ExtArgs>
        fields: Prisma.BankSchemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankSchemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSchemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankSchemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSchemaPayload>
          }
          findFirst: {
            args: Prisma.BankSchemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSchemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankSchemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSchemaPayload>
          }
          findMany: {
            args: Prisma.BankSchemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSchemaPayload>[]
          }
          create: {
            args: Prisma.BankSchemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSchemaPayload>
          }
          createMany: {
            args: Prisma.BankSchemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BankSchemaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSchemaPayload>[]
          }
          delete: {
            args: Prisma.BankSchemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSchemaPayload>
          }
          update: {
            args: Prisma.BankSchemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSchemaPayload>
          }
          deleteMany: {
            args: Prisma.BankSchemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankSchemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BankSchemaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSchemaPayload>[]
          }
          upsert: {
            args: Prisma.BankSchemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankSchemaPayload>
          }
          aggregate: {
            args: Prisma.BankSchemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBankSchema>
          }
          groupBy: {
            args: Prisma.BankSchemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankSchemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankSchemaCountArgs<ExtArgs>
            result: $Utils.Optional<BankSchemaCountAggregateOutputType> | number
          }
        }
      }
      WalletSchema: {
        payload: Prisma.$WalletSchemaPayload<ExtArgs>
        fields: Prisma.WalletSchemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletSchemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSchemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletSchemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSchemaPayload>
          }
          findFirst: {
            args: Prisma.WalletSchemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSchemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletSchemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSchemaPayload>
          }
          findMany: {
            args: Prisma.WalletSchemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSchemaPayload>[]
          }
          create: {
            args: Prisma.WalletSchemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSchemaPayload>
          }
          createMany: {
            args: Prisma.WalletSchemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletSchemaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSchemaPayload>[]
          }
          delete: {
            args: Prisma.WalletSchemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSchemaPayload>
          }
          update: {
            args: Prisma.WalletSchemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSchemaPayload>
          }
          deleteMany: {
            args: Prisma.WalletSchemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletSchemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalletSchemaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSchemaPayload>[]
          }
          upsert: {
            args: Prisma.WalletSchemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSchemaPayload>
          }
          aggregate: {
            args: Prisma.WalletSchemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWalletSchema>
          }
          groupBy: {
            args: Prisma.WalletSchemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletSchemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletSchemaCountArgs<ExtArgs>
            result: $Utils.Optional<WalletSchemaCountAggregateOutputType> | number
          }
        }
      }
      CompletedPoject: {
        payload: Prisma.$CompletedPojectPayload<ExtArgs>
        fields: Prisma.CompletedPojectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompletedPojectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPojectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompletedPojectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPojectPayload>
          }
          findFirst: {
            args: Prisma.CompletedPojectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPojectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompletedPojectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPojectPayload>
          }
          findMany: {
            args: Prisma.CompletedPojectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPojectPayload>[]
          }
          create: {
            args: Prisma.CompletedPojectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPojectPayload>
          }
          createMany: {
            args: Prisma.CompletedPojectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompletedPojectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPojectPayload>[]
          }
          delete: {
            args: Prisma.CompletedPojectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPojectPayload>
          }
          update: {
            args: Prisma.CompletedPojectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPojectPayload>
          }
          deleteMany: {
            args: Prisma.CompletedPojectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompletedPojectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompletedPojectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPojectPayload>[]
          }
          upsert: {
            args: Prisma.CompletedPojectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPojectPayload>
          }
          aggregate: {
            args: Prisma.CompletedPojectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompletedPoject>
          }
          groupBy: {
            args: Prisma.CompletedPojectGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompletedPojectGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompletedPojectCountArgs<ExtArgs>
            result: $Utils.Optional<CompletedPojectCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    userSchema?: UserSchemaOmit
    clientSchema?: ClientSchemaOmit
    profileSchema?: ProfileSchemaOmit
    jobSchema?: JobSchemaOmit
    applyJob?: ApplyJobOmit
    acceptedProject?: AcceptedProjectOmit
    bankSchema?: BankSchemaOmit
    walletSchema?: WalletSchemaOmit
    completedPoject?: CompletedPojectOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserSchemaCountOutputType
   */

  export type UserSchemaCountOutputType = {
    ApplyJob: number
    AcceptedProject: number
    CompletedPoject: number
  }

  export type UserSchemaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ApplyJob?: boolean | UserSchemaCountOutputTypeCountApplyJobArgs
    AcceptedProject?: boolean | UserSchemaCountOutputTypeCountAcceptedProjectArgs
    CompletedPoject?: boolean | UserSchemaCountOutputTypeCountCompletedPojectArgs
  }

  // Custom InputTypes
  /**
   * UserSchemaCountOutputType without action
   */
  export type UserSchemaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchemaCountOutputType
     */
    select?: UserSchemaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserSchemaCountOutputType without action
   */
  export type UserSchemaCountOutputTypeCountApplyJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplyJobWhereInput
  }

  /**
   * UserSchemaCountOutputType without action
   */
  export type UserSchemaCountOutputTypeCountAcceptedProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcceptedProjectWhereInput
  }

  /**
   * UserSchemaCountOutputType without action
   */
  export type UserSchemaCountOutputTypeCountCompletedPojectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedPojectWhereInput
  }


  /**
   * Count Type ClientSchemaCountOutputType
   */

  export type ClientSchemaCountOutputType = {
    jobschema: number
    ApplyJobs: number
    AcceptedProject: number
    CompletedPoject: number
  }

  export type ClientSchemaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobschema?: boolean | ClientSchemaCountOutputTypeCountJobschemaArgs
    ApplyJobs?: boolean | ClientSchemaCountOutputTypeCountApplyJobsArgs
    AcceptedProject?: boolean | ClientSchemaCountOutputTypeCountAcceptedProjectArgs
    CompletedPoject?: boolean | ClientSchemaCountOutputTypeCountCompletedPojectArgs
  }

  // Custom InputTypes
  /**
   * ClientSchemaCountOutputType without action
   */
  export type ClientSchemaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchemaCountOutputType
     */
    select?: ClientSchemaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientSchemaCountOutputType without action
   */
  export type ClientSchemaCountOutputTypeCountJobschemaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobSchemaWhereInput
  }

  /**
   * ClientSchemaCountOutputType without action
   */
  export type ClientSchemaCountOutputTypeCountApplyJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplyJobWhereInput
  }

  /**
   * ClientSchemaCountOutputType without action
   */
  export type ClientSchemaCountOutputTypeCountAcceptedProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcceptedProjectWhereInput
  }

  /**
   * ClientSchemaCountOutputType without action
   */
  export type ClientSchemaCountOutputTypeCountCompletedPojectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedPojectWhereInput
  }


  /**
   * Count Type ProfileSchemaCountOutputType
   */

  export type ProfileSchemaCountOutputType = {
    applyJobs: number
  }

  export type ProfileSchemaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applyJobs?: boolean | ProfileSchemaCountOutputTypeCountApplyJobsArgs
  }

  // Custom InputTypes
  /**
   * ProfileSchemaCountOutputType without action
   */
  export type ProfileSchemaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchemaCountOutputType
     */
    select?: ProfileSchemaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileSchemaCountOutputType without action
   */
  export type ProfileSchemaCountOutputTypeCountApplyJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplyJobWhereInput
  }


  /**
   * Count Type JobSchemaCountOutputType
   */

  export type JobSchemaCountOutputType = {
    applyJob: number
  }

  export type JobSchemaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applyJob?: boolean | JobSchemaCountOutputTypeCountApplyJobArgs
  }

  // Custom InputTypes
  /**
   * JobSchemaCountOutputType without action
   */
  export type JobSchemaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchemaCountOutputType
     */
    select?: JobSchemaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobSchemaCountOutputType without action
   */
  export type JobSchemaCountOutputTypeCountApplyJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplyJobWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserSchema
   */

  export type AggregateUserSchema = {
    _count: UserSchemaCountAggregateOutputType | null
    _avg: UserSchemaAvgAggregateOutputType | null
    _sum: UserSchemaSumAggregateOutputType | null
    _min: UserSchemaMinAggregateOutputType | null
    _max: UserSchemaMaxAggregateOutputType | null
  }

  export type UserSchemaAvgAggregateOutputType = {
    user_id: number | null
    Experience: number | null
    Rating: number | null
  }

  export type UserSchemaSumAggregateOutputType = {
    user_id: number | null
    Experience: number | null
    Rating: number | null
  }

  export type UserSchemaMinAggregateOutputType = {
    user_id: number | null
    Name: string | null
    Email: string | null
    Password: string | null
    Experience: number | null
    Rating: number | null
  }

  export type UserSchemaMaxAggregateOutputType = {
    user_id: number | null
    Name: string | null
    Email: string | null
    Password: string | null
    Experience: number | null
    Rating: number | null
  }

  export type UserSchemaCountAggregateOutputType = {
    user_id: number
    Name: number
    Email: number
    Password: number
    Experience: number
    Rating: number
    Skills: number
    _all: number
  }


  export type UserSchemaAvgAggregateInputType = {
    user_id?: true
    Experience?: true
    Rating?: true
  }

  export type UserSchemaSumAggregateInputType = {
    user_id?: true
    Experience?: true
    Rating?: true
  }

  export type UserSchemaMinAggregateInputType = {
    user_id?: true
    Name?: true
    Email?: true
    Password?: true
    Experience?: true
    Rating?: true
  }

  export type UserSchemaMaxAggregateInputType = {
    user_id?: true
    Name?: true
    Email?: true
    Password?: true
    Experience?: true
    Rating?: true
  }

  export type UserSchemaCountAggregateInputType = {
    user_id?: true
    Name?: true
    Email?: true
    Password?: true
    Experience?: true
    Rating?: true
    Skills?: true
    _all?: true
  }

  export type UserSchemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSchema to aggregate.
     */
    where?: UserSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSchemas to fetch.
     */
    orderBy?: UserSchemaOrderByWithRelationInput | UserSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSchemas
    **/
    _count?: true | UserSchemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSchemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSchemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSchemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSchemaMaxAggregateInputType
  }

  export type GetUserSchemaAggregateType<T extends UserSchemaAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSchema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSchema[P]>
      : GetScalarType<T[P], AggregateUserSchema[P]>
  }




  export type UserSchemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSchemaWhereInput
    orderBy?: UserSchemaOrderByWithAggregationInput | UserSchemaOrderByWithAggregationInput[]
    by: UserSchemaScalarFieldEnum[] | UserSchemaScalarFieldEnum
    having?: UserSchemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSchemaCountAggregateInputType | true
    _avg?: UserSchemaAvgAggregateInputType
    _sum?: UserSchemaSumAggregateInputType
    _min?: UserSchemaMinAggregateInputType
    _max?: UserSchemaMaxAggregateInputType
  }

  export type UserSchemaGroupByOutputType = {
    user_id: number
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills: string[]
    _count: UserSchemaCountAggregateOutputType | null
    _avg: UserSchemaAvgAggregateOutputType | null
    _sum: UserSchemaSumAggregateOutputType | null
    _min: UserSchemaMinAggregateOutputType | null
    _max: UserSchemaMaxAggregateOutputType | null
  }

  type GetUserSchemaGroupByPayload<T extends UserSchemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSchemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSchemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSchemaGroupByOutputType[P]>
            : GetScalarType<T[P], UserSchemaGroupByOutputType[P]>
        }
      >
    >


  export type UserSchemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    Name?: boolean
    Email?: boolean
    Password?: boolean
    Experience?: boolean
    Rating?: boolean
    Skills?: boolean
    Profile?: boolean | UserSchema$ProfileArgs<ExtArgs>
    ApplyJob?: boolean | UserSchema$ApplyJobArgs<ExtArgs>
    AcceptedProject?: boolean | UserSchema$AcceptedProjectArgs<ExtArgs>
    CompletedPoject?: boolean | UserSchema$CompletedPojectArgs<ExtArgs>
    _count?: boolean | UserSchemaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSchema"]>

  export type UserSchemaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    Name?: boolean
    Email?: boolean
    Password?: boolean
    Experience?: boolean
    Rating?: boolean
    Skills?: boolean
  }, ExtArgs["result"]["userSchema"]>

  export type UserSchemaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    Name?: boolean
    Email?: boolean
    Password?: boolean
    Experience?: boolean
    Rating?: boolean
    Skills?: boolean
  }, ExtArgs["result"]["userSchema"]>

  export type UserSchemaSelectScalar = {
    user_id?: boolean
    Name?: boolean
    Email?: boolean
    Password?: boolean
    Experience?: boolean
    Rating?: boolean
    Skills?: boolean
  }

  export type UserSchemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "Name" | "Email" | "Password" | "Experience" | "Rating" | "Skills", ExtArgs["result"]["userSchema"]>
  export type UserSchemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Profile?: boolean | UserSchema$ProfileArgs<ExtArgs>
    ApplyJob?: boolean | UserSchema$ApplyJobArgs<ExtArgs>
    AcceptedProject?: boolean | UserSchema$AcceptedProjectArgs<ExtArgs>
    CompletedPoject?: boolean | UserSchema$CompletedPojectArgs<ExtArgs>
    _count?: boolean | UserSchemaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserSchemaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserSchemaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserSchemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSchema"
    objects: {
      Profile: Prisma.$ProfileSchemaPayload<ExtArgs> | null
      ApplyJob: Prisma.$ApplyJobPayload<ExtArgs>[]
      AcceptedProject: Prisma.$AcceptedProjectPayload<ExtArgs>[]
      CompletedPoject: Prisma.$CompletedPojectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      Name: string
      Email: string
      Password: string
      Experience: number
      Rating: number
      Skills: string[]
    }, ExtArgs["result"]["userSchema"]>
    composites: {}
  }

  type UserSchemaGetPayload<S extends boolean | null | undefined | UserSchemaDefaultArgs> = $Result.GetResult<Prisma.$UserSchemaPayload, S>

  type UserSchemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSchemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSchemaCountAggregateInputType | true
    }

  export interface UserSchemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSchema'], meta: { name: 'UserSchema' } }
    /**
     * Find zero or one UserSchema that matches the filter.
     * @param {UserSchemaFindUniqueArgs} args - Arguments to find a UserSchema
     * @example
     * // Get one UserSchema
     * const userSchema = await prisma.userSchema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSchemaFindUniqueArgs>(args: SelectSubset<T, UserSchemaFindUniqueArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSchema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSchemaFindUniqueOrThrowArgs} args - Arguments to find a UserSchema
     * @example
     * // Get one UserSchema
     * const userSchema = await prisma.userSchema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSchemaFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSchemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSchema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchemaFindFirstArgs} args - Arguments to find a UserSchema
     * @example
     * // Get one UserSchema
     * const userSchema = await prisma.userSchema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSchemaFindFirstArgs>(args?: SelectSubset<T, UserSchemaFindFirstArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSchema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchemaFindFirstOrThrowArgs} args - Arguments to find a UserSchema
     * @example
     * // Get one UserSchema
     * const userSchema = await prisma.userSchema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSchemaFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSchemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSchemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSchemas
     * const userSchemas = await prisma.userSchema.findMany()
     * 
     * // Get first 10 UserSchemas
     * const userSchemas = await prisma.userSchema.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userSchemaWithUser_idOnly = await prisma.userSchema.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserSchemaFindManyArgs>(args?: SelectSubset<T, UserSchemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSchema.
     * @param {UserSchemaCreateArgs} args - Arguments to create a UserSchema.
     * @example
     * // Create one UserSchema
     * const UserSchema = await prisma.userSchema.create({
     *   data: {
     *     // ... data to create a UserSchema
     *   }
     * })
     * 
     */
    create<T extends UserSchemaCreateArgs>(args: SelectSubset<T, UserSchemaCreateArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSchemas.
     * @param {UserSchemaCreateManyArgs} args - Arguments to create many UserSchemas.
     * @example
     * // Create many UserSchemas
     * const userSchema = await prisma.userSchema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSchemaCreateManyArgs>(args?: SelectSubset<T, UserSchemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSchemas and returns the data saved in the database.
     * @param {UserSchemaCreateManyAndReturnArgs} args - Arguments to create many UserSchemas.
     * @example
     * // Create many UserSchemas
     * const userSchema = await prisma.userSchema.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSchemas and only return the `user_id`
     * const userSchemaWithUser_idOnly = await prisma.userSchema.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSchemaCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSchemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSchema.
     * @param {UserSchemaDeleteArgs} args - Arguments to delete one UserSchema.
     * @example
     * // Delete one UserSchema
     * const UserSchema = await prisma.userSchema.delete({
     *   where: {
     *     // ... filter to delete one UserSchema
     *   }
     * })
     * 
     */
    delete<T extends UserSchemaDeleteArgs>(args: SelectSubset<T, UserSchemaDeleteArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSchema.
     * @param {UserSchemaUpdateArgs} args - Arguments to update one UserSchema.
     * @example
     * // Update one UserSchema
     * const userSchema = await prisma.userSchema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSchemaUpdateArgs>(args: SelectSubset<T, UserSchemaUpdateArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSchemas.
     * @param {UserSchemaDeleteManyArgs} args - Arguments to filter UserSchemas to delete.
     * @example
     * // Delete a few UserSchemas
     * const { count } = await prisma.userSchema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSchemaDeleteManyArgs>(args?: SelectSubset<T, UserSchemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSchemas
     * const userSchema = await prisma.userSchema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSchemaUpdateManyArgs>(args: SelectSubset<T, UserSchemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSchemas and returns the data updated in the database.
     * @param {UserSchemaUpdateManyAndReturnArgs} args - Arguments to update many UserSchemas.
     * @example
     * // Update many UserSchemas
     * const userSchema = await prisma.userSchema.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSchemas and only return the `user_id`
     * const userSchemaWithUser_idOnly = await prisma.userSchema.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSchemaUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSchemaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSchema.
     * @param {UserSchemaUpsertArgs} args - Arguments to update or create a UserSchema.
     * @example
     * // Update or create a UserSchema
     * const userSchema = await prisma.userSchema.upsert({
     *   create: {
     *     // ... data to create a UserSchema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSchema we want to update
     *   }
     * })
     */
    upsert<T extends UserSchemaUpsertArgs>(args: SelectSubset<T, UserSchemaUpsertArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchemaCountArgs} args - Arguments to filter UserSchemas to count.
     * @example
     * // Count the number of UserSchemas
     * const count = await prisma.userSchema.count({
     *   where: {
     *     // ... the filter for the UserSchemas we want to count
     *   }
     * })
    **/
    count<T extends UserSchemaCountArgs>(
      args?: Subset<T, UserSchemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSchemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSchemaAggregateArgs>(args: Subset<T, UserSchemaAggregateArgs>): Prisma.PrismaPromise<GetUserSchemaAggregateType<T>>

    /**
     * Group by UserSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchemaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSchemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSchemaGroupByArgs['orderBy'] }
        : { orderBy?: UserSchemaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSchemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSchemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSchema model
   */
  readonly fields: UserSchemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSchema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSchemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Profile<T extends UserSchema$ProfileArgs<ExtArgs> = {}>(args?: Subset<T, UserSchema$ProfileArgs<ExtArgs>>): Prisma__ProfileSchemaClient<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ApplyJob<T extends UserSchema$ApplyJobArgs<ExtArgs> = {}>(args?: Subset<T, UserSchema$ApplyJobArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AcceptedProject<T extends UserSchema$AcceptedProjectArgs<ExtArgs> = {}>(args?: Subset<T, UserSchema$AcceptedProjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcceptedProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CompletedPoject<T extends UserSchema$CompletedPojectArgs<ExtArgs> = {}>(args?: Subset<T, UserSchema$CompletedPojectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedPojectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSchema model
   */ 
  interface UserSchemaFieldRefs {
    readonly user_id: FieldRef<"UserSchema", 'Int'>
    readonly Name: FieldRef<"UserSchema", 'String'>
    readonly Email: FieldRef<"UserSchema", 'String'>
    readonly Password: FieldRef<"UserSchema", 'String'>
    readonly Experience: FieldRef<"UserSchema", 'Int'>
    readonly Rating: FieldRef<"UserSchema", 'Int'>
    readonly Skills: FieldRef<"UserSchema", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * UserSchema findUnique
   */
  export type UserSchemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchemaInclude<ExtArgs> | null
    /**
     * Filter, which UserSchema to fetch.
     */
    where: UserSchemaWhereUniqueInput
  }

  /**
   * UserSchema findUniqueOrThrow
   */
  export type UserSchemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchemaInclude<ExtArgs> | null
    /**
     * Filter, which UserSchema to fetch.
     */
    where: UserSchemaWhereUniqueInput
  }

  /**
   * UserSchema findFirst
   */
  export type UserSchemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchemaInclude<ExtArgs> | null
    /**
     * Filter, which UserSchema to fetch.
     */
    where?: UserSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSchemas to fetch.
     */
    orderBy?: UserSchemaOrderByWithRelationInput | UserSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSchemas.
     */
    cursor?: UserSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSchemas.
     */
    distinct?: UserSchemaScalarFieldEnum | UserSchemaScalarFieldEnum[]
  }

  /**
   * UserSchema findFirstOrThrow
   */
  export type UserSchemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchemaInclude<ExtArgs> | null
    /**
     * Filter, which UserSchema to fetch.
     */
    where?: UserSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSchemas to fetch.
     */
    orderBy?: UserSchemaOrderByWithRelationInput | UserSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSchemas.
     */
    cursor?: UserSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSchemas.
     */
    distinct?: UserSchemaScalarFieldEnum | UserSchemaScalarFieldEnum[]
  }

  /**
   * UserSchema findMany
   */
  export type UserSchemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchemaInclude<ExtArgs> | null
    /**
     * Filter, which UserSchemas to fetch.
     */
    where?: UserSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSchemas to fetch.
     */
    orderBy?: UserSchemaOrderByWithRelationInput | UserSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSchemas.
     */
    cursor?: UserSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSchemas.
     */
    skip?: number
    distinct?: UserSchemaScalarFieldEnum | UserSchemaScalarFieldEnum[]
  }

  /**
   * UserSchema create
   */
  export type UserSchemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchemaInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSchema.
     */
    data: XOR<UserSchemaCreateInput, UserSchemaUncheckedCreateInput>
  }

  /**
   * UserSchema createMany
   */
  export type UserSchemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSchemas.
     */
    data: UserSchemaCreateManyInput | UserSchemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSchema createManyAndReturn
   */
  export type UserSchemaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * The data used to create many UserSchemas.
     */
    data: UserSchemaCreateManyInput | UserSchemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSchema update
   */
  export type UserSchemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchemaInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSchema.
     */
    data: XOR<UserSchemaUpdateInput, UserSchemaUncheckedUpdateInput>
    /**
     * Choose, which UserSchema to update.
     */
    where: UserSchemaWhereUniqueInput
  }

  /**
   * UserSchema updateMany
   */
  export type UserSchemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSchemas.
     */
    data: XOR<UserSchemaUpdateManyMutationInput, UserSchemaUncheckedUpdateManyInput>
    /**
     * Filter which UserSchemas to update
     */
    where?: UserSchemaWhereInput
    /**
     * Limit how many UserSchemas to update.
     */
    limit?: number
  }

  /**
   * UserSchema updateManyAndReturn
   */
  export type UserSchemaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * The data used to update UserSchemas.
     */
    data: XOR<UserSchemaUpdateManyMutationInput, UserSchemaUncheckedUpdateManyInput>
    /**
     * Filter which UserSchemas to update
     */
    where?: UserSchemaWhereInput
    /**
     * Limit how many UserSchemas to update.
     */
    limit?: number
  }

  /**
   * UserSchema upsert
   */
  export type UserSchemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchemaInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSchema to update in case it exists.
     */
    where: UserSchemaWhereUniqueInput
    /**
     * In case the UserSchema found by the `where` argument doesn't exist, create a new UserSchema with this data.
     */
    create: XOR<UserSchemaCreateInput, UserSchemaUncheckedCreateInput>
    /**
     * In case the UserSchema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSchemaUpdateInput, UserSchemaUncheckedUpdateInput>
  }

  /**
   * UserSchema delete
   */
  export type UserSchemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchemaInclude<ExtArgs> | null
    /**
     * Filter which UserSchema to delete.
     */
    where: UserSchemaWhereUniqueInput
  }

  /**
   * UserSchema deleteMany
   */
  export type UserSchemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSchemas to delete
     */
    where?: UserSchemaWhereInput
    /**
     * Limit how many UserSchemas to delete.
     */
    limit?: number
  }

  /**
   * UserSchema.Profile
   */
  export type UserSchema$ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
    where?: ProfileSchemaWhereInput
  }

  /**
   * UserSchema.ApplyJob
   */
  export type UserSchema$ApplyJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    where?: ApplyJobWhereInput
    orderBy?: ApplyJobOrderByWithRelationInput | ApplyJobOrderByWithRelationInput[]
    cursor?: ApplyJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplyJobScalarFieldEnum | ApplyJobScalarFieldEnum[]
  }

  /**
   * UserSchema.AcceptedProject
   */
  export type UserSchema$AcceptedProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedProject
     */
    select?: AcceptedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedProject
     */
    omit?: AcceptedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedProjectInclude<ExtArgs> | null
    where?: AcceptedProjectWhereInput
    orderBy?: AcceptedProjectOrderByWithRelationInput | AcceptedProjectOrderByWithRelationInput[]
    cursor?: AcceptedProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcceptedProjectScalarFieldEnum | AcceptedProjectScalarFieldEnum[]
  }

  /**
   * UserSchema.CompletedPoject
   */
  export type UserSchema$CompletedPojectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedPoject
     */
    select?: CompletedPojectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedPoject
     */
    omit?: CompletedPojectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedPojectInclude<ExtArgs> | null
    where?: CompletedPojectWhereInput
    orderBy?: CompletedPojectOrderByWithRelationInput | CompletedPojectOrderByWithRelationInput[]
    cursor?: CompletedPojectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedPojectScalarFieldEnum | CompletedPojectScalarFieldEnum[]
  }

  /**
   * UserSchema without action
   */
  export type UserSchemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchema
     */
    select?: UserSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSchema
     */
    omit?: UserSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSchemaInclude<ExtArgs> | null
  }


  /**
   * Model ClientSchema
   */

  export type AggregateClientSchema = {
    _count: ClientSchemaCountAggregateOutputType | null
    _avg: ClientSchemaAvgAggregateOutputType | null
    _sum: ClientSchemaSumAggregateOutputType | null
    _min: ClientSchemaMinAggregateOutputType | null
    _max: ClientSchemaMaxAggregateOutputType | null
  }

  export type ClientSchemaAvgAggregateOutputType = {
    client_id: number | null
  }

  export type ClientSchemaSumAggregateOutputType = {
    client_id: number | null
  }

  export type ClientSchemaMinAggregateOutputType = {
    client_id: number | null
    client_name: string | null
    Email: string | null
    Password: string | null
    Organization: string | null
  }

  export type ClientSchemaMaxAggregateOutputType = {
    client_id: number | null
    client_name: string | null
    Email: string | null
    Password: string | null
    Organization: string | null
  }

  export type ClientSchemaCountAggregateOutputType = {
    client_id: number
    client_name: number
    Email: number
    Password: number
    Organization: number
    _all: number
  }


  export type ClientSchemaAvgAggregateInputType = {
    client_id?: true
  }

  export type ClientSchemaSumAggregateInputType = {
    client_id?: true
  }

  export type ClientSchemaMinAggregateInputType = {
    client_id?: true
    client_name?: true
    Email?: true
    Password?: true
    Organization?: true
  }

  export type ClientSchemaMaxAggregateInputType = {
    client_id?: true
    client_name?: true
    Email?: true
    Password?: true
    Organization?: true
  }

  export type ClientSchemaCountAggregateInputType = {
    client_id?: true
    client_name?: true
    Email?: true
    Password?: true
    Organization?: true
    _all?: true
  }

  export type ClientSchemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientSchema to aggregate.
     */
    where?: ClientSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientSchemas to fetch.
     */
    orderBy?: ClientSchemaOrderByWithRelationInput | ClientSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientSchemas
    **/
    _count?: true | ClientSchemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientSchemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSchemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientSchemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientSchemaMaxAggregateInputType
  }

  export type GetClientSchemaAggregateType<T extends ClientSchemaAggregateArgs> = {
        [P in keyof T & keyof AggregateClientSchema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientSchema[P]>
      : GetScalarType<T[P], AggregateClientSchema[P]>
  }




  export type ClientSchemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientSchemaWhereInput
    orderBy?: ClientSchemaOrderByWithAggregationInput | ClientSchemaOrderByWithAggregationInput[]
    by: ClientSchemaScalarFieldEnum[] | ClientSchemaScalarFieldEnum
    having?: ClientSchemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientSchemaCountAggregateInputType | true
    _avg?: ClientSchemaAvgAggregateInputType
    _sum?: ClientSchemaSumAggregateInputType
    _min?: ClientSchemaMinAggregateInputType
    _max?: ClientSchemaMaxAggregateInputType
  }

  export type ClientSchemaGroupByOutputType = {
    client_id: number
    client_name: string
    Email: string
    Password: string
    Organization: string | null
    _count: ClientSchemaCountAggregateOutputType | null
    _avg: ClientSchemaAvgAggregateOutputType | null
    _sum: ClientSchemaSumAggregateOutputType | null
    _min: ClientSchemaMinAggregateOutputType | null
    _max: ClientSchemaMaxAggregateOutputType | null
  }

  type GetClientSchemaGroupByPayload<T extends ClientSchemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientSchemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientSchemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientSchemaGroupByOutputType[P]>
            : GetScalarType<T[P], ClientSchemaGroupByOutputType[P]>
        }
      >
    >


  export type ClientSchemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    client_name?: boolean
    Email?: boolean
    Password?: boolean
    Organization?: boolean
    jobschema?: boolean | ClientSchema$jobschemaArgs<ExtArgs>
    ApplyJobs?: boolean | ClientSchema$ApplyJobsArgs<ExtArgs>
    AcceptedProject?: boolean | ClientSchema$AcceptedProjectArgs<ExtArgs>
    CompletedPoject?: boolean | ClientSchema$CompletedPojectArgs<ExtArgs>
    _count?: boolean | ClientSchemaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientSchema"]>

  export type ClientSchemaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    client_name?: boolean
    Email?: boolean
    Password?: boolean
    Organization?: boolean
  }, ExtArgs["result"]["clientSchema"]>

  export type ClientSchemaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    client_name?: boolean
    Email?: boolean
    Password?: boolean
    Organization?: boolean
  }, ExtArgs["result"]["clientSchema"]>

  export type ClientSchemaSelectScalar = {
    client_id?: boolean
    client_name?: boolean
    Email?: boolean
    Password?: boolean
    Organization?: boolean
  }

  export type ClientSchemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"client_id" | "client_name" | "Email" | "Password" | "Organization", ExtArgs["result"]["clientSchema"]>
  export type ClientSchemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobschema?: boolean | ClientSchema$jobschemaArgs<ExtArgs>
    ApplyJobs?: boolean | ClientSchema$ApplyJobsArgs<ExtArgs>
    AcceptedProject?: boolean | ClientSchema$AcceptedProjectArgs<ExtArgs>
    CompletedPoject?: boolean | ClientSchema$CompletedPojectArgs<ExtArgs>
    _count?: boolean | ClientSchemaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientSchemaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientSchemaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientSchemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientSchema"
    objects: {
      jobschema: Prisma.$JobSchemaPayload<ExtArgs>[]
      ApplyJobs: Prisma.$ApplyJobPayload<ExtArgs>[]
      AcceptedProject: Prisma.$AcceptedProjectPayload<ExtArgs>[]
      CompletedPoject: Prisma.$CompletedPojectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      client_id: number
      client_name: string
      Email: string
      Password: string
      Organization: string | null
    }, ExtArgs["result"]["clientSchema"]>
    composites: {}
  }

  type ClientSchemaGetPayload<S extends boolean | null | undefined | ClientSchemaDefaultArgs> = $Result.GetResult<Prisma.$ClientSchemaPayload, S>

  type ClientSchemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientSchemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientSchemaCountAggregateInputType | true
    }

  export interface ClientSchemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientSchema'], meta: { name: 'ClientSchema' } }
    /**
     * Find zero or one ClientSchema that matches the filter.
     * @param {ClientSchemaFindUniqueArgs} args - Arguments to find a ClientSchema
     * @example
     * // Get one ClientSchema
     * const clientSchema = await prisma.clientSchema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientSchemaFindUniqueArgs>(args: SelectSubset<T, ClientSchemaFindUniqueArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientSchema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientSchemaFindUniqueOrThrowArgs} args - Arguments to find a ClientSchema
     * @example
     * // Get one ClientSchema
     * const clientSchema = await prisma.clientSchema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientSchemaFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientSchemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientSchema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSchemaFindFirstArgs} args - Arguments to find a ClientSchema
     * @example
     * // Get one ClientSchema
     * const clientSchema = await prisma.clientSchema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientSchemaFindFirstArgs>(args?: SelectSubset<T, ClientSchemaFindFirstArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientSchema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSchemaFindFirstOrThrowArgs} args - Arguments to find a ClientSchema
     * @example
     * // Get one ClientSchema
     * const clientSchema = await prisma.clientSchema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientSchemaFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientSchemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientSchemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSchemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientSchemas
     * const clientSchemas = await prisma.clientSchema.findMany()
     * 
     * // Get first 10 ClientSchemas
     * const clientSchemas = await prisma.clientSchema.findMany({ take: 10 })
     * 
     * // Only select the `client_id`
     * const clientSchemaWithClient_idOnly = await prisma.clientSchema.findMany({ select: { client_id: true } })
     * 
     */
    findMany<T extends ClientSchemaFindManyArgs>(args?: SelectSubset<T, ClientSchemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientSchema.
     * @param {ClientSchemaCreateArgs} args - Arguments to create a ClientSchema.
     * @example
     * // Create one ClientSchema
     * const ClientSchema = await prisma.clientSchema.create({
     *   data: {
     *     // ... data to create a ClientSchema
     *   }
     * })
     * 
     */
    create<T extends ClientSchemaCreateArgs>(args: SelectSubset<T, ClientSchemaCreateArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientSchemas.
     * @param {ClientSchemaCreateManyArgs} args - Arguments to create many ClientSchemas.
     * @example
     * // Create many ClientSchemas
     * const clientSchema = await prisma.clientSchema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientSchemaCreateManyArgs>(args?: SelectSubset<T, ClientSchemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientSchemas and returns the data saved in the database.
     * @param {ClientSchemaCreateManyAndReturnArgs} args - Arguments to create many ClientSchemas.
     * @example
     * // Create many ClientSchemas
     * const clientSchema = await prisma.clientSchema.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientSchemas and only return the `client_id`
     * const clientSchemaWithClient_idOnly = await prisma.clientSchema.createManyAndReturn({
     *   select: { client_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientSchemaCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientSchemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientSchema.
     * @param {ClientSchemaDeleteArgs} args - Arguments to delete one ClientSchema.
     * @example
     * // Delete one ClientSchema
     * const ClientSchema = await prisma.clientSchema.delete({
     *   where: {
     *     // ... filter to delete one ClientSchema
     *   }
     * })
     * 
     */
    delete<T extends ClientSchemaDeleteArgs>(args: SelectSubset<T, ClientSchemaDeleteArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientSchema.
     * @param {ClientSchemaUpdateArgs} args - Arguments to update one ClientSchema.
     * @example
     * // Update one ClientSchema
     * const clientSchema = await prisma.clientSchema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientSchemaUpdateArgs>(args: SelectSubset<T, ClientSchemaUpdateArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientSchemas.
     * @param {ClientSchemaDeleteManyArgs} args - Arguments to filter ClientSchemas to delete.
     * @example
     * // Delete a few ClientSchemas
     * const { count } = await prisma.clientSchema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientSchemaDeleteManyArgs>(args?: SelectSubset<T, ClientSchemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSchemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientSchemas
     * const clientSchema = await prisma.clientSchema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientSchemaUpdateManyArgs>(args: SelectSubset<T, ClientSchemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientSchemas and returns the data updated in the database.
     * @param {ClientSchemaUpdateManyAndReturnArgs} args - Arguments to update many ClientSchemas.
     * @example
     * // Update many ClientSchemas
     * const clientSchema = await prisma.clientSchema.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientSchemas and only return the `client_id`
     * const clientSchemaWithClient_idOnly = await prisma.clientSchema.updateManyAndReturn({
     *   select: { client_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientSchemaUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientSchemaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientSchema.
     * @param {ClientSchemaUpsertArgs} args - Arguments to update or create a ClientSchema.
     * @example
     * // Update or create a ClientSchema
     * const clientSchema = await prisma.clientSchema.upsert({
     *   create: {
     *     // ... data to create a ClientSchema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientSchema we want to update
     *   }
     * })
     */
    upsert<T extends ClientSchemaUpsertArgs>(args: SelectSubset<T, ClientSchemaUpsertArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSchemaCountArgs} args - Arguments to filter ClientSchemas to count.
     * @example
     * // Count the number of ClientSchemas
     * const count = await prisma.clientSchema.count({
     *   where: {
     *     // ... the filter for the ClientSchemas we want to count
     *   }
     * })
    **/
    count<T extends ClientSchemaCountArgs>(
      args?: Subset<T, ClientSchemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientSchemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSchemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientSchemaAggregateArgs>(args: Subset<T, ClientSchemaAggregateArgs>): Prisma.PrismaPromise<GetClientSchemaAggregateType<T>>

    /**
     * Group by ClientSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSchemaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientSchemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientSchemaGroupByArgs['orderBy'] }
        : { orderBy?: ClientSchemaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientSchemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientSchemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientSchema model
   */
  readonly fields: ClientSchemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientSchema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientSchemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobschema<T extends ClientSchema$jobschemaArgs<ExtArgs> = {}>(args?: Subset<T, ClientSchema$jobschemaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ApplyJobs<T extends ClientSchema$ApplyJobsArgs<ExtArgs> = {}>(args?: Subset<T, ClientSchema$ApplyJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AcceptedProject<T extends ClientSchema$AcceptedProjectArgs<ExtArgs> = {}>(args?: Subset<T, ClientSchema$AcceptedProjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcceptedProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CompletedPoject<T extends ClientSchema$CompletedPojectArgs<ExtArgs> = {}>(args?: Subset<T, ClientSchema$CompletedPojectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedPojectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientSchema model
   */ 
  interface ClientSchemaFieldRefs {
    readonly client_id: FieldRef<"ClientSchema", 'Int'>
    readonly client_name: FieldRef<"ClientSchema", 'String'>
    readonly Email: FieldRef<"ClientSchema", 'String'>
    readonly Password: FieldRef<"ClientSchema", 'String'>
    readonly Organization: FieldRef<"ClientSchema", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClientSchema findUnique
   */
  export type ClientSchemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSchemaInclude<ExtArgs> | null
    /**
     * Filter, which ClientSchema to fetch.
     */
    where: ClientSchemaWhereUniqueInput
  }

  /**
   * ClientSchema findUniqueOrThrow
   */
  export type ClientSchemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSchemaInclude<ExtArgs> | null
    /**
     * Filter, which ClientSchema to fetch.
     */
    where: ClientSchemaWhereUniqueInput
  }

  /**
   * ClientSchema findFirst
   */
  export type ClientSchemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSchemaInclude<ExtArgs> | null
    /**
     * Filter, which ClientSchema to fetch.
     */
    where?: ClientSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientSchemas to fetch.
     */
    orderBy?: ClientSchemaOrderByWithRelationInput | ClientSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientSchemas.
     */
    cursor?: ClientSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientSchemas.
     */
    distinct?: ClientSchemaScalarFieldEnum | ClientSchemaScalarFieldEnum[]
  }

  /**
   * ClientSchema findFirstOrThrow
   */
  export type ClientSchemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSchemaInclude<ExtArgs> | null
    /**
     * Filter, which ClientSchema to fetch.
     */
    where?: ClientSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientSchemas to fetch.
     */
    orderBy?: ClientSchemaOrderByWithRelationInput | ClientSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientSchemas.
     */
    cursor?: ClientSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientSchemas.
     */
    distinct?: ClientSchemaScalarFieldEnum | ClientSchemaScalarFieldEnum[]
  }

  /**
   * ClientSchema findMany
   */
  export type ClientSchemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSchemaInclude<ExtArgs> | null
    /**
     * Filter, which ClientSchemas to fetch.
     */
    where?: ClientSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientSchemas to fetch.
     */
    orderBy?: ClientSchemaOrderByWithRelationInput | ClientSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientSchemas.
     */
    cursor?: ClientSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientSchemas.
     */
    skip?: number
    distinct?: ClientSchemaScalarFieldEnum | ClientSchemaScalarFieldEnum[]
  }

  /**
   * ClientSchema create
   */
  export type ClientSchemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSchemaInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientSchema.
     */
    data: XOR<ClientSchemaCreateInput, ClientSchemaUncheckedCreateInput>
  }

  /**
   * ClientSchema createMany
   */
  export type ClientSchemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientSchemas.
     */
    data: ClientSchemaCreateManyInput | ClientSchemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientSchema createManyAndReturn
   */
  export type ClientSchemaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * The data used to create many ClientSchemas.
     */
    data: ClientSchemaCreateManyInput | ClientSchemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientSchema update
   */
  export type ClientSchemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSchemaInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientSchema.
     */
    data: XOR<ClientSchemaUpdateInput, ClientSchemaUncheckedUpdateInput>
    /**
     * Choose, which ClientSchema to update.
     */
    where: ClientSchemaWhereUniqueInput
  }

  /**
   * ClientSchema updateMany
   */
  export type ClientSchemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientSchemas.
     */
    data: XOR<ClientSchemaUpdateManyMutationInput, ClientSchemaUncheckedUpdateManyInput>
    /**
     * Filter which ClientSchemas to update
     */
    where?: ClientSchemaWhereInput
    /**
     * Limit how many ClientSchemas to update.
     */
    limit?: number
  }

  /**
   * ClientSchema updateManyAndReturn
   */
  export type ClientSchemaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * The data used to update ClientSchemas.
     */
    data: XOR<ClientSchemaUpdateManyMutationInput, ClientSchemaUncheckedUpdateManyInput>
    /**
     * Filter which ClientSchemas to update
     */
    where?: ClientSchemaWhereInput
    /**
     * Limit how many ClientSchemas to update.
     */
    limit?: number
  }

  /**
   * ClientSchema upsert
   */
  export type ClientSchemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSchemaInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientSchema to update in case it exists.
     */
    where: ClientSchemaWhereUniqueInput
    /**
     * In case the ClientSchema found by the `where` argument doesn't exist, create a new ClientSchema with this data.
     */
    create: XOR<ClientSchemaCreateInput, ClientSchemaUncheckedCreateInput>
    /**
     * In case the ClientSchema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientSchemaUpdateInput, ClientSchemaUncheckedUpdateInput>
  }

  /**
   * ClientSchema delete
   */
  export type ClientSchemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSchemaInclude<ExtArgs> | null
    /**
     * Filter which ClientSchema to delete.
     */
    where: ClientSchemaWhereUniqueInput
  }

  /**
   * ClientSchema deleteMany
   */
  export type ClientSchemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientSchemas to delete
     */
    where?: ClientSchemaWhereInput
    /**
     * Limit how many ClientSchemas to delete.
     */
    limit?: number
  }

  /**
   * ClientSchema.jobschema
   */
  export type ClientSchema$jobschemaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
    where?: JobSchemaWhereInput
    orderBy?: JobSchemaOrderByWithRelationInput | JobSchemaOrderByWithRelationInput[]
    cursor?: JobSchemaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobSchemaScalarFieldEnum | JobSchemaScalarFieldEnum[]
  }

  /**
   * ClientSchema.ApplyJobs
   */
  export type ClientSchema$ApplyJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    where?: ApplyJobWhereInput
    orderBy?: ApplyJobOrderByWithRelationInput | ApplyJobOrderByWithRelationInput[]
    cursor?: ApplyJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplyJobScalarFieldEnum | ApplyJobScalarFieldEnum[]
  }

  /**
   * ClientSchema.AcceptedProject
   */
  export type ClientSchema$AcceptedProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedProject
     */
    select?: AcceptedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedProject
     */
    omit?: AcceptedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedProjectInclude<ExtArgs> | null
    where?: AcceptedProjectWhereInput
    orderBy?: AcceptedProjectOrderByWithRelationInput | AcceptedProjectOrderByWithRelationInput[]
    cursor?: AcceptedProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcceptedProjectScalarFieldEnum | AcceptedProjectScalarFieldEnum[]
  }

  /**
   * ClientSchema.CompletedPoject
   */
  export type ClientSchema$CompletedPojectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedPoject
     */
    select?: CompletedPojectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedPoject
     */
    omit?: CompletedPojectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedPojectInclude<ExtArgs> | null
    where?: CompletedPojectWhereInput
    orderBy?: CompletedPojectOrderByWithRelationInput | CompletedPojectOrderByWithRelationInput[]
    cursor?: CompletedPojectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedPojectScalarFieldEnum | CompletedPojectScalarFieldEnum[]
  }

  /**
   * ClientSchema without action
   */
  export type ClientSchemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientSchema
     */
    select?: ClientSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientSchema
     */
    omit?: ClientSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientSchemaInclude<ExtArgs> | null
  }


  /**
   * Model ProfileSchema
   */

  export type AggregateProfileSchema = {
    _count: ProfileSchemaCountAggregateOutputType | null
    _avg: ProfileSchemaAvgAggregateOutputType | null
    _sum: ProfileSchemaSumAggregateOutputType | null
    _min: ProfileSchemaMinAggregateOutputType | null
    _max: ProfileSchemaMaxAggregateOutputType | null
  }

  export type ProfileSchemaAvgAggregateOutputType = {
    profile_id: number | null
    userid: number | null
  }

  export type ProfileSchemaSumAggregateOutputType = {
    profile_id: number | null
    userid: number | null
  }

  export type ProfileSchemaMinAggregateOutputType = {
    profile_id: number | null
    About: string | null
    userid: number | null
  }

  export type ProfileSchemaMaxAggregateOutputType = {
    profile_id: number | null
    About: string | null
    userid: number | null
  }

  export type ProfileSchemaCountAggregateOutputType = {
    profile_id: number
    About: number
    ProjectLink: number
    userid: number
    _all: number
  }


  export type ProfileSchemaAvgAggregateInputType = {
    profile_id?: true
    userid?: true
  }

  export type ProfileSchemaSumAggregateInputType = {
    profile_id?: true
    userid?: true
  }

  export type ProfileSchemaMinAggregateInputType = {
    profile_id?: true
    About?: true
    userid?: true
  }

  export type ProfileSchemaMaxAggregateInputType = {
    profile_id?: true
    About?: true
    userid?: true
  }

  export type ProfileSchemaCountAggregateInputType = {
    profile_id?: true
    About?: true
    ProjectLink?: true
    userid?: true
    _all?: true
  }

  export type ProfileSchemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileSchema to aggregate.
     */
    where?: ProfileSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileSchemas to fetch.
     */
    orderBy?: ProfileSchemaOrderByWithRelationInput | ProfileSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfileSchemas
    **/
    _count?: true | ProfileSchemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileSchemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSchemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileSchemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileSchemaMaxAggregateInputType
  }

  export type GetProfileSchemaAggregateType<T extends ProfileSchemaAggregateArgs> = {
        [P in keyof T & keyof AggregateProfileSchema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfileSchema[P]>
      : GetScalarType<T[P], AggregateProfileSchema[P]>
  }




  export type ProfileSchemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileSchemaWhereInput
    orderBy?: ProfileSchemaOrderByWithAggregationInput | ProfileSchemaOrderByWithAggregationInput[]
    by: ProfileSchemaScalarFieldEnum[] | ProfileSchemaScalarFieldEnum
    having?: ProfileSchemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileSchemaCountAggregateInputType | true
    _avg?: ProfileSchemaAvgAggregateInputType
    _sum?: ProfileSchemaSumAggregateInputType
    _min?: ProfileSchemaMinAggregateInputType
    _max?: ProfileSchemaMaxAggregateInputType
  }

  export type ProfileSchemaGroupByOutputType = {
    profile_id: number
    About: string
    ProjectLink: string[]
    userid: number
    _count: ProfileSchemaCountAggregateOutputType | null
    _avg: ProfileSchemaAvgAggregateOutputType | null
    _sum: ProfileSchemaSumAggregateOutputType | null
    _min: ProfileSchemaMinAggregateOutputType | null
    _max: ProfileSchemaMaxAggregateOutputType | null
  }

  type GetProfileSchemaGroupByPayload<T extends ProfileSchemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileSchemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileSchemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileSchemaGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileSchemaGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSchemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profile_id?: boolean
    About?: boolean
    ProjectLink?: boolean
    userid?: boolean
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
    applyJobs?: boolean | ProfileSchema$applyJobsArgs<ExtArgs>
    _count?: boolean | ProfileSchemaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileSchema"]>

  export type ProfileSchemaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profile_id?: boolean
    About?: boolean
    ProjectLink?: boolean
    userid?: boolean
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileSchema"]>

  export type ProfileSchemaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profile_id?: boolean
    About?: boolean
    ProjectLink?: boolean
    userid?: boolean
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileSchema"]>

  export type ProfileSchemaSelectScalar = {
    profile_id?: boolean
    About?: boolean
    ProjectLink?: boolean
    userid?: boolean
  }

  export type ProfileSchemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"profile_id" | "About" | "ProjectLink" | "userid", ExtArgs["result"]["profileSchema"]>
  export type ProfileSchemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
    applyJobs?: boolean | ProfileSchema$applyJobsArgs<ExtArgs>
    _count?: boolean | ProfileSchemaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileSchemaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
  }
  export type ProfileSchemaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
  }

  export type $ProfileSchemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfileSchema"
    objects: {
      user: Prisma.$UserSchemaPayload<ExtArgs>
      applyJobs: Prisma.$ApplyJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      profile_id: number
      About: string
      ProjectLink: string[]
      userid: number
    }, ExtArgs["result"]["profileSchema"]>
    composites: {}
  }

  type ProfileSchemaGetPayload<S extends boolean | null | undefined | ProfileSchemaDefaultArgs> = $Result.GetResult<Prisma.$ProfileSchemaPayload, S>

  type ProfileSchemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileSchemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileSchemaCountAggregateInputType | true
    }

  export interface ProfileSchemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfileSchema'], meta: { name: 'ProfileSchema' } }
    /**
     * Find zero or one ProfileSchema that matches the filter.
     * @param {ProfileSchemaFindUniqueArgs} args - Arguments to find a ProfileSchema
     * @example
     * // Get one ProfileSchema
     * const profileSchema = await prisma.profileSchema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileSchemaFindUniqueArgs>(args: SelectSubset<T, ProfileSchemaFindUniqueArgs<ExtArgs>>): Prisma__ProfileSchemaClient<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfileSchema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileSchemaFindUniqueOrThrowArgs} args - Arguments to find a ProfileSchema
     * @example
     * // Get one ProfileSchema
     * const profileSchema = await prisma.profileSchema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileSchemaFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileSchemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileSchemaClient<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileSchema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileSchemaFindFirstArgs} args - Arguments to find a ProfileSchema
     * @example
     * // Get one ProfileSchema
     * const profileSchema = await prisma.profileSchema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileSchemaFindFirstArgs>(args?: SelectSubset<T, ProfileSchemaFindFirstArgs<ExtArgs>>): Prisma__ProfileSchemaClient<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileSchema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileSchemaFindFirstOrThrowArgs} args - Arguments to find a ProfileSchema
     * @example
     * // Get one ProfileSchema
     * const profileSchema = await prisma.profileSchema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileSchemaFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileSchemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileSchemaClient<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfileSchemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileSchemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfileSchemas
     * const profileSchemas = await prisma.profileSchema.findMany()
     * 
     * // Get first 10 ProfileSchemas
     * const profileSchemas = await prisma.profileSchema.findMany({ take: 10 })
     * 
     * // Only select the `profile_id`
     * const profileSchemaWithProfile_idOnly = await prisma.profileSchema.findMany({ select: { profile_id: true } })
     * 
     */
    findMany<T extends ProfileSchemaFindManyArgs>(args?: SelectSubset<T, ProfileSchemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfileSchema.
     * @param {ProfileSchemaCreateArgs} args - Arguments to create a ProfileSchema.
     * @example
     * // Create one ProfileSchema
     * const ProfileSchema = await prisma.profileSchema.create({
     *   data: {
     *     // ... data to create a ProfileSchema
     *   }
     * })
     * 
     */
    create<T extends ProfileSchemaCreateArgs>(args: SelectSubset<T, ProfileSchemaCreateArgs<ExtArgs>>): Prisma__ProfileSchemaClient<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfileSchemas.
     * @param {ProfileSchemaCreateManyArgs} args - Arguments to create many ProfileSchemas.
     * @example
     * // Create many ProfileSchemas
     * const profileSchema = await prisma.profileSchema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileSchemaCreateManyArgs>(args?: SelectSubset<T, ProfileSchemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfileSchemas and returns the data saved in the database.
     * @param {ProfileSchemaCreateManyAndReturnArgs} args - Arguments to create many ProfileSchemas.
     * @example
     * // Create many ProfileSchemas
     * const profileSchema = await prisma.profileSchema.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfileSchemas and only return the `profile_id`
     * const profileSchemaWithProfile_idOnly = await prisma.profileSchema.createManyAndReturn({
     *   select: { profile_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileSchemaCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileSchemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfileSchema.
     * @param {ProfileSchemaDeleteArgs} args - Arguments to delete one ProfileSchema.
     * @example
     * // Delete one ProfileSchema
     * const ProfileSchema = await prisma.profileSchema.delete({
     *   where: {
     *     // ... filter to delete one ProfileSchema
     *   }
     * })
     * 
     */
    delete<T extends ProfileSchemaDeleteArgs>(args: SelectSubset<T, ProfileSchemaDeleteArgs<ExtArgs>>): Prisma__ProfileSchemaClient<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfileSchema.
     * @param {ProfileSchemaUpdateArgs} args - Arguments to update one ProfileSchema.
     * @example
     * // Update one ProfileSchema
     * const profileSchema = await prisma.profileSchema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileSchemaUpdateArgs>(args: SelectSubset<T, ProfileSchemaUpdateArgs<ExtArgs>>): Prisma__ProfileSchemaClient<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfileSchemas.
     * @param {ProfileSchemaDeleteManyArgs} args - Arguments to filter ProfileSchemas to delete.
     * @example
     * // Delete a few ProfileSchemas
     * const { count } = await prisma.profileSchema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileSchemaDeleteManyArgs>(args?: SelectSubset<T, ProfileSchemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileSchemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfileSchemas
     * const profileSchema = await prisma.profileSchema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileSchemaUpdateManyArgs>(args: SelectSubset<T, ProfileSchemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileSchemas and returns the data updated in the database.
     * @param {ProfileSchemaUpdateManyAndReturnArgs} args - Arguments to update many ProfileSchemas.
     * @example
     * // Update many ProfileSchemas
     * const profileSchema = await prisma.profileSchema.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfileSchemas and only return the `profile_id`
     * const profileSchemaWithProfile_idOnly = await prisma.profileSchema.updateManyAndReturn({
     *   select: { profile_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileSchemaUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileSchemaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfileSchema.
     * @param {ProfileSchemaUpsertArgs} args - Arguments to update or create a ProfileSchema.
     * @example
     * // Update or create a ProfileSchema
     * const profileSchema = await prisma.profileSchema.upsert({
     *   create: {
     *     // ... data to create a ProfileSchema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileSchema we want to update
     *   }
     * })
     */
    upsert<T extends ProfileSchemaUpsertArgs>(args: SelectSubset<T, ProfileSchemaUpsertArgs<ExtArgs>>): Prisma__ProfileSchemaClient<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfileSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileSchemaCountArgs} args - Arguments to filter ProfileSchemas to count.
     * @example
     * // Count the number of ProfileSchemas
     * const count = await prisma.profileSchema.count({
     *   where: {
     *     // ... the filter for the ProfileSchemas we want to count
     *   }
     * })
    **/
    count<T extends ProfileSchemaCountArgs>(
      args?: Subset<T, ProfileSchemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileSchemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfileSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileSchemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileSchemaAggregateArgs>(args: Subset<T, ProfileSchemaAggregateArgs>): Prisma.PrismaPromise<GetProfileSchemaAggregateType<T>>

    /**
     * Group by ProfileSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileSchemaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileSchemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileSchemaGroupByArgs['orderBy'] }
        : { orderBy?: ProfileSchemaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileSchemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileSchemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfileSchema model
   */
  readonly fields: ProfileSchemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfileSchema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileSchemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserSchemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserSchemaDefaultArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applyJobs<T extends ProfileSchema$applyJobsArgs<ExtArgs> = {}>(args?: Subset<T, ProfileSchema$applyJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProfileSchema model
   */ 
  interface ProfileSchemaFieldRefs {
    readonly profile_id: FieldRef<"ProfileSchema", 'Int'>
    readonly About: FieldRef<"ProfileSchema", 'String'>
    readonly ProjectLink: FieldRef<"ProfileSchema", 'String[]'>
    readonly userid: FieldRef<"ProfileSchema", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProfileSchema findUnique
   */
  export type ProfileSchemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
    /**
     * Filter, which ProfileSchema to fetch.
     */
    where: ProfileSchemaWhereUniqueInput
  }

  /**
   * ProfileSchema findUniqueOrThrow
   */
  export type ProfileSchemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
    /**
     * Filter, which ProfileSchema to fetch.
     */
    where: ProfileSchemaWhereUniqueInput
  }

  /**
   * ProfileSchema findFirst
   */
  export type ProfileSchemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
    /**
     * Filter, which ProfileSchema to fetch.
     */
    where?: ProfileSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileSchemas to fetch.
     */
    orderBy?: ProfileSchemaOrderByWithRelationInput | ProfileSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileSchemas.
     */
    cursor?: ProfileSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileSchemas.
     */
    distinct?: ProfileSchemaScalarFieldEnum | ProfileSchemaScalarFieldEnum[]
  }

  /**
   * ProfileSchema findFirstOrThrow
   */
  export type ProfileSchemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
    /**
     * Filter, which ProfileSchema to fetch.
     */
    where?: ProfileSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileSchemas to fetch.
     */
    orderBy?: ProfileSchemaOrderByWithRelationInput | ProfileSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileSchemas.
     */
    cursor?: ProfileSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileSchemas.
     */
    distinct?: ProfileSchemaScalarFieldEnum | ProfileSchemaScalarFieldEnum[]
  }

  /**
   * ProfileSchema findMany
   */
  export type ProfileSchemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
    /**
     * Filter, which ProfileSchemas to fetch.
     */
    where?: ProfileSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileSchemas to fetch.
     */
    orderBy?: ProfileSchemaOrderByWithRelationInput | ProfileSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfileSchemas.
     */
    cursor?: ProfileSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileSchemas.
     */
    skip?: number
    distinct?: ProfileSchemaScalarFieldEnum | ProfileSchemaScalarFieldEnum[]
  }

  /**
   * ProfileSchema create
   */
  export type ProfileSchemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfileSchema.
     */
    data: XOR<ProfileSchemaCreateInput, ProfileSchemaUncheckedCreateInput>
  }

  /**
   * ProfileSchema createMany
   */
  export type ProfileSchemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfileSchemas.
     */
    data: ProfileSchemaCreateManyInput | ProfileSchemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfileSchema createManyAndReturn
   */
  export type ProfileSchemaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * The data used to create many ProfileSchemas.
     */
    data: ProfileSchemaCreateManyInput | ProfileSchemaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileSchema update
   */
  export type ProfileSchemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfileSchema.
     */
    data: XOR<ProfileSchemaUpdateInput, ProfileSchemaUncheckedUpdateInput>
    /**
     * Choose, which ProfileSchema to update.
     */
    where: ProfileSchemaWhereUniqueInput
  }

  /**
   * ProfileSchema updateMany
   */
  export type ProfileSchemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfileSchemas.
     */
    data: XOR<ProfileSchemaUpdateManyMutationInput, ProfileSchemaUncheckedUpdateManyInput>
    /**
     * Filter which ProfileSchemas to update
     */
    where?: ProfileSchemaWhereInput
    /**
     * Limit how many ProfileSchemas to update.
     */
    limit?: number
  }

  /**
   * ProfileSchema updateManyAndReturn
   */
  export type ProfileSchemaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * The data used to update ProfileSchemas.
     */
    data: XOR<ProfileSchemaUpdateManyMutationInput, ProfileSchemaUncheckedUpdateManyInput>
    /**
     * Filter which ProfileSchemas to update
     */
    where?: ProfileSchemaWhereInput
    /**
     * Limit how many ProfileSchemas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileSchema upsert
   */
  export type ProfileSchemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfileSchema to update in case it exists.
     */
    where: ProfileSchemaWhereUniqueInput
    /**
     * In case the ProfileSchema found by the `where` argument doesn't exist, create a new ProfileSchema with this data.
     */
    create: XOR<ProfileSchemaCreateInput, ProfileSchemaUncheckedCreateInput>
    /**
     * In case the ProfileSchema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileSchemaUpdateInput, ProfileSchemaUncheckedUpdateInput>
  }

  /**
   * ProfileSchema delete
   */
  export type ProfileSchemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
    /**
     * Filter which ProfileSchema to delete.
     */
    where: ProfileSchemaWhereUniqueInput
  }

  /**
   * ProfileSchema deleteMany
   */
  export type ProfileSchemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileSchemas to delete
     */
    where?: ProfileSchemaWhereInput
    /**
     * Limit how many ProfileSchemas to delete.
     */
    limit?: number
  }

  /**
   * ProfileSchema.applyJobs
   */
  export type ProfileSchema$applyJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    where?: ApplyJobWhereInput
    orderBy?: ApplyJobOrderByWithRelationInput | ApplyJobOrderByWithRelationInput[]
    cursor?: ApplyJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplyJobScalarFieldEnum | ApplyJobScalarFieldEnum[]
  }

  /**
   * ProfileSchema without action
   */
  export type ProfileSchemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileSchema
     */
    select?: ProfileSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileSchema
     */
    omit?: ProfileSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileSchemaInclude<ExtArgs> | null
  }


  /**
   * Model JobSchema
   */

  export type AggregateJobSchema = {
    _count: JobSchemaCountAggregateOutputType | null
    _avg: JobSchemaAvgAggregateOutputType | null
    _sum: JobSchemaSumAggregateOutputType | null
    _min: JobSchemaMinAggregateOutputType | null
    _max: JobSchemaMaxAggregateOutputType | null
  }

  export type JobSchemaAvgAggregateOutputType = {
    job_id: number | null
    clientid: number | null
  }

  export type JobSchemaSumAggregateOutputType = {
    job_id: number | null
    clientid: number | null
  }

  export type JobSchemaMinAggregateOutputType = {
    job_id: number | null
    clientid: number | null
    Job_titile: string | null
    Job_description: string | null
    Budget: string | null
    Timeline: string | null
  }

  export type JobSchemaMaxAggregateOutputType = {
    job_id: number | null
    clientid: number | null
    Job_titile: string | null
    Job_description: string | null
    Budget: string | null
    Timeline: string | null
  }

  export type JobSchemaCountAggregateOutputType = {
    job_id: number
    clientid: number
    Job_titile: number
    Job_description: number
    Budget: number
    Timeline: number
    _all: number
  }


  export type JobSchemaAvgAggregateInputType = {
    job_id?: true
    clientid?: true
  }

  export type JobSchemaSumAggregateInputType = {
    job_id?: true
    clientid?: true
  }

  export type JobSchemaMinAggregateInputType = {
    job_id?: true
    clientid?: true
    Job_titile?: true
    Job_description?: true
    Budget?: true
    Timeline?: true
  }

  export type JobSchemaMaxAggregateInputType = {
    job_id?: true
    clientid?: true
    Job_titile?: true
    Job_description?: true
    Budget?: true
    Timeline?: true
  }

  export type JobSchemaCountAggregateInputType = {
    job_id?: true
    clientid?: true
    Job_titile?: true
    Job_description?: true
    Budget?: true
    Timeline?: true
    _all?: true
  }

  export type JobSchemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobSchema to aggregate.
     */
    where?: JobSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSchemas to fetch.
     */
    orderBy?: JobSchemaOrderByWithRelationInput | JobSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobSchemas
    **/
    _count?: true | JobSchemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobSchemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSchemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobSchemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobSchemaMaxAggregateInputType
  }

  export type GetJobSchemaAggregateType<T extends JobSchemaAggregateArgs> = {
        [P in keyof T & keyof AggregateJobSchema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobSchema[P]>
      : GetScalarType<T[P], AggregateJobSchema[P]>
  }




  export type JobSchemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobSchemaWhereInput
    orderBy?: JobSchemaOrderByWithAggregationInput | JobSchemaOrderByWithAggregationInput[]
    by: JobSchemaScalarFieldEnum[] | JobSchemaScalarFieldEnum
    having?: JobSchemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobSchemaCountAggregateInputType | true
    _avg?: JobSchemaAvgAggregateInputType
    _sum?: JobSchemaSumAggregateInputType
    _min?: JobSchemaMinAggregateInputType
    _max?: JobSchemaMaxAggregateInputType
  }

  export type JobSchemaGroupByOutputType = {
    job_id: number
    clientid: number
    Job_titile: string
    Job_description: string
    Budget: string
    Timeline: string
    _count: JobSchemaCountAggregateOutputType | null
    _avg: JobSchemaAvgAggregateOutputType | null
    _sum: JobSchemaSumAggregateOutputType | null
    _min: JobSchemaMinAggregateOutputType | null
    _max: JobSchemaMaxAggregateOutputType | null
  }

  type GetJobSchemaGroupByPayload<T extends JobSchemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobSchemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobSchemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobSchemaGroupByOutputType[P]>
            : GetScalarType<T[P], JobSchemaGroupByOutputType[P]>
        }
      >
    >


  export type JobSchemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    job_id?: boolean
    clientid?: boolean
    Job_titile?: boolean
    Job_description?: boolean
    Budget?: boolean
    Timeline?: boolean
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    applyJob?: boolean | JobSchema$applyJobArgs<ExtArgs>
    _count?: boolean | JobSchemaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobSchema"]>

  export type JobSchemaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    job_id?: boolean
    clientid?: boolean
    Job_titile?: boolean
    Job_description?: boolean
    Budget?: boolean
    Timeline?: boolean
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobSchema"]>

  export type JobSchemaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    job_id?: boolean
    clientid?: boolean
    Job_titile?: boolean
    Job_description?: boolean
    Budget?: boolean
    Timeline?: boolean
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobSchema"]>

  export type JobSchemaSelectScalar = {
    job_id?: boolean
    clientid?: boolean
    Job_titile?: boolean
    Job_description?: boolean
    Budget?: boolean
    Timeline?: boolean
  }

  export type JobSchemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"job_id" | "clientid" | "Job_titile" | "Job_description" | "Budget" | "Timeline", ExtArgs["result"]["jobSchema"]>
  export type JobSchemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    applyJob?: boolean | JobSchema$applyJobArgs<ExtArgs>
    _count?: boolean | JobSchemaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobSchemaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
  }
  export type JobSchemaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
  }

  export type $JobSchemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobSchema"
    objects: {
      client: Prisma.$ClientSchemaPayload<ExtArgs>
      applyJob: Prisma.$ApplyJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      job_id: number
      clientid: number
      Job_titile: string
      Job_description: string
      Budget: string
      Timeline: string
    }, ExtArgs["result"]["jobSchema"]>
    composites: {}
  }

  type JobSchemaGetPayload<S extends boolean | null | undefined | JobSchemaDefaultArgs> = $Result.GetResult<Prisma.$JobSchemaPayload, S>

  type JobSchemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobSchemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobSchemaCountAggregateInputType | true
    }

  export interface JobSchemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobSchema'], meta: { name: 'JobSchema' } }
    /**
     * Find zero or one JobSchema that matches the filter.
     * @param {JobSchemaFindUniqueArgs} args - Arguments to find a JobSchema
     * @example
     * // Get one JobSchema
     * const jobSchema = await prisma.jobSchema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobSchemaFindUniqueArgs>(args: SelectSubset<T, JobSchemaFindUniqueArgs<ExtArgs>>): Prisma__JobSchemaClient<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobSchema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobSchemaFindUniqueOrThrowArgs} args - Arguments to find a JobSchema
     * @example
     * // Get one JobSchema
     * const jobSchema = await prisma.jobSchema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobSchemaFindUniqueOrThrowArgs>(args: SelectSubset<T, JobSchemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobSchemaClient<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobSchema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSchemaFindFirstArgs} args - Arguments to find a JobSchema
     * @example
     * // Get one JobSchema
     * const jobSchema = await prisma.jobSchema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobSchemaFindFirstArgs>(args?: SelectSubset<T, JobSchemaFindFirstArgs<ExtArgs>>): Prisma__JobSchemaClient<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobSchema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSchemaFindFirstOrThrowArgs} args - Arguments to find a JobSchema
     * @example
     * // Get one JobSchema
     * const jobSchema = await prisma.jobSchema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobSchemaFindFirstOrThrowArgs>(args?: SelectSubset<T, JobSchemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobSchemaClient<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobSchemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSchemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobSchemas
     * const jobSchemas = await prisma.jobSchema.findMany()
     * 
     * // Get first 10 JobSchemas
     * const jobSchemas = await prisma.jobSchema.findMany({ take: 10 })
     * 
     * // Only select the `job_id`
     * const jobSchemaWithJob_idOnly = await prisma.jobSchema.findMany({ select: { job_id: true } })
     * 
     */
    findMany<T extends JobSchemaFindManyArgs>(args?: SelectSubset<T, JobSchemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobSchema.
     * @param {JobSchemaCreateArgs} args - Arguments to create a JobSchema.
     * @example
     * // Create one JobSchema
     * const JobSchema = await prisma.jobSchema.create({
     *   data: {
     *     // ... data to create a JobSchema
     *   }
     * })
     * 
     */
    create<T extends JobSchemaCreateArgs>(args: SelectSubset<T, JobSchemaCreateArgs<ExtArgs>>): Prisma__JobSchemaClient<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobSchemas.
     * @param {JobSchemaCreateManyArgs} args - Arguments to create many JobSchemas.
     * @example
     * // Create many JobSchemas
     * const jobSchema = await prisma.jobSchema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobSchemaCreateManyArgs>(args?: SelectSubset<T, JobSchemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobSchemas and returns the data saved in the database.
     * @param {JobSchemaCreateManyAndReturnArgs} args - Arguments to create many JobSchemas.
     * @example
     * // Create many JobSchemas
     * const jobSchema = await prisma.jobSchema.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobSchemas and only return the `job_id`
     * const jobSchemaWithJob_idOnly = await prisma.jobSchema.createManyAndReturn({
     *   select: { job_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobSchemaCreateManyAndReturnArgs>(args?: SelectSubset<T, JobSchemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobSchema.
     * @param {JobSchemaDeleteArgs} args - Arguments to delete one JobSchema.
     * @example
     * // Delete one JobSchema
     * const JobSchema = await prisma.jobSchema.delete({
     *   where: {
     *     // ... filter to delete one JobSchema
     *   }
     * })
     * 
     */
    delete<T extends JobSchemaDeleteArgs>(args: SelectSubset<T, JobSchemaDeleteArgs<ExtArgs>>): Prisma__JobSchemaClient<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobSchema.
     * @param {JobSchemaUpdateArgs} args - Arguments to update one JobSchema.
     * @example
     * // Update one JobSchema
     * const jobSchema = await prisma.jobSchema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobSchemaUpdateArgs>(args: SelectSubset<T, JobSchemaUpdateArgs<ExtArgs>>): Prisma__JobSchemaClient<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobSchemas.
     * @param {JobSchemaDeleteManyArgs} args - Arguments to filter JobSchemas to delete.
     * @example
     * // Delete a few JobSchemas
     * const { count } = await prisma.jobSchema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobSchemaDeleteManyArgs>(args?: SelectSubset<T, JobSchemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSchemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobSchemas
     * const jobSchema = await prisma.jobSchema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobSchemaUpdateManyArgs>(args: SelectSubset<T, JobSchemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobSchemas and returns the data updated in the database.
     * @param {JobSchemaUpdateManyAndReturnArgs} args - Arguments to update many JobSchemas.
     * @example
     * // Update many JobSchemas
     * const jobSchema = await prisma.jobSchema.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobSchemas and only return the `job_id`
     * const jobSchemaWithJob_idOnly = await prisma.jobSchema.updateManyAndReturn({
     *   select: { job_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobSchemaUpdateManyAndReturnArgs>(args: SelectSubset<T, JobSchemaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobSchema.
     * @param {JobSchemaUpsertArgs} args - Arguments to update or create a JobSchema.
     * @example
     * // Update or create a JobSchema
     * const jobSchema = await prisma.jobSchema.upsert({
     *   create: {
     *     // ... data to create a JobSchema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobSchema we want to update
     *   }
     * })
     */
    upsert<T extends JobSchemaUpsertArgs>(args: SelectSubset<T, JobSchemaUpsertArgs<ExtArgs>>): Prisma__JobSchemaClient<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSchemaCountArgs} args - Arguments to filter JobSchemas to count.
     * @example
     * // Count the number of JobSchemas
     * const count = await prisma.jobSchema.count({
     *   where: {
     *     // ... the filter for the JobSchemas we want to count
     *   }
     * })
    **/
    count<T extends JobSchemaCountArgs>(
      args?: Subset<T, JobSchemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobSchemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSchemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobSchemaAggregateArgs>(args: Subset<T, JobSchemaAggregateArgs>): Prisma.PrismaPromise<GetJobSchemaAggregateType<T>>

    /**
     * Group by JobSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSchemaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobSchemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobSchemaGroupByArgs['orderBy'] }
        : { orderBy?: JobSchemaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobSchemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobSchemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobSchema model
   */
  readonly fields: JobSchemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobSchema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobSchemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientSchemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientSchemaDefaultArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applyJob<T extends JobSchema$applyJobArgs<ExtArgs> = {}>(args?: Subset<T, JobSchema$applyJobArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobSchema model
   */ 
  interface JobSchemaFieldRefs {
    readonly job_id: FieldRef<"JobSchema", 'Int'>
    readonly clientid: FieldRef<"JobSchema", 'Int'>
    readonly Job_titile: FieldRef<"JobSchema", 'String'>
    readonly Job_description: FieldRef<"JobSchema", 'String'>
    readonly Budget: FieldRef<"JobSchema", 'String'>
    readonly Timeline: FieldRef<"JobSchema", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JobSchema findUnique
   */
  export type JobSchemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
    /**
     * Filter, which JobSchema to fetch.
     */
    where: JobSchemaWhereUniqueInput
  }

  /**
   * JobSchema findUniqueOrThrow
   */
  export type JobSchemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
    /**
     * Filter, which JobSchema to fetch.
     */
    where: JobSchemaWhereUniqueInput
  }

  /**
   * JobSchema findFirst
   */
  export type JobSchemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
    /**
     * Filter, which JobSchema to fetch.
     */
    where?: JobSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSchemas to fetch.
     */
    orderBy?: JobSchemaOrderByWithRelationInput | JobSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobSchemas.
     */
    cursor?: JobSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobSchemas.
     */
    distinct?: JobSchemaScalarFieldEnum | JobSchemaScalarFieldEnum[]
  }

  /**
   * JobSchema findFirstOrThrow
   */
  export type JobSchemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
    /**
     * Filter, which JobSchema to fetch.
     */
    where?: JobSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSchemas to fetch.
     */
    orderBy?: JobSchemaOrderByWithRelationInput | JobSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobSchemas.
     */
    cursor?: JobSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobSchemas.
     */
    distinct?: JobSchemaScalarFieldEnum | JobSchemaScalarFieldEnum[]
  }

  /**
   * JobSchema findMany
   */
  export type JobSchemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
    /**
     * Filter, which JobSchemas to fetch.
     */
    where?: JobSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSchemas to fetch.
     */
    orderBy?: JobSchemaOrderByWithRelationInput | JobSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobSchemas.
     */
    cursor?: JobSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSchemas.
     */
    skip?: number
    distinct?: JobSchemaScalarFieldEnum | JobSchemaScalarFieldEnum[]
  }

  /**
   * JobSchema create
   */
  export type JobSchemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
    /**
     * The data needed to create a JobSchema.
     */
    data: XOR<JobSchemaCreateInput, JobSchemaUncheckedCreateInput>
  }

  /**
   * JobSchema createMany
   */
  export type JobSchemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobSchemas.
     */
    data: JobSchemaCreateManyInput | JobSchemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobSchema createManyAndReturn
   */
  export type JobSchemaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * The data used to create many JobSchemas.
     */
    data: JobSchemaCreateManyInput | JobSchemaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobSchema update
   */
  export type JobSchemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
    /**
     * The data needed to update a JobSchema.
     */
    data: XOR<JobSchemaUpdateInput, JobSchemaUncheckedUpdateInput>
    /**
     * Choose, which JobSchema to update.
     */
    where: JobSchemaWhereUniqueInput
  }

  /**
   * JobSchema updateMany
   */
  export type JobSchemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobSchemas.
     */
    data: XOR<JobSchemaUpdateManyMutationInput, JobSchemaUncheckedUpdateManyInput>
    /**
     * Filter which JobSchemas to update
     */
    where?: JobSchemaWhereInput
    /**
     * Limit how many JobSchemas to update.
     */
    limit?: number
  }

  /**
   * JobSchema updateManyAndReturn
   */
  export type JobSchemaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * The data used to update JobSchemas.
     */
    data: XOR<JobSchemaUpdateManyMutationInput, JobSchemaUncheckedUpdateManyInput>
    /**
     * Filter which JobSchemas to update
     */
    where?: JobSchemaWhereInput
    /**
     * Limit how many JobSchemas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobSchema upsert
   */
  export type JobSchemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
    /**
     * The filter to search for the JobSchema to update in case it exists.
     */
    where: JobSchemaWhereUniqueInput
    /**
     * In case the JobSchema found by the `where` argument doesn't exist, create a new JobSchema with this data.
     */
    create: XOR<JobSchemaCreateInput, JobSchemaUncheckedCreateInput>
    /**
     * In case the JobSchema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobSchemaUpdateInput, JobSchemaUncheckedUpdateInput>
  }

  /**
   * JobSchema delete
   */
  export type JobSchemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
    /**
     * Filter which JobSchema to delete.
     */
    where: JobSchemaWhereUniqueInput
  }

  /**
   * JobSchema deleteMany
   */
  export type JobSchemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobSchemas to delete
     */
    where?: JobSchemaWhereInput
    /**
     * Limit how many JobSchemas to delete.
     */
    limit?: number
  }

  /**
   * JobSchema.applyJob
   */
  export type JobSchema$applyJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    where?: ApplyJobWhereInput
    orderBy?: ApplyJobOrderByWithRelationInput | ApplyJobOrderByWithRelationInput[]
    cursor?: ApplyJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplyJobScalarFieldEnum | ApplyJobScalarFieldEnum[]
  }

  /**
   * JobSchema without action
   */
  export type JobSchemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSchema
     */
    select?: JobSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSchema
     */
    omit?: JobSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSchemaInclude<ExtArgs> | null
  }


  /**
   * Model ApplyJob
   */

  export type AggregateApplyJob = {
    _count: ApplyJobCountAggregateOutputType | null
    _avg: ApplyJobAvgAggregateOutputType | null
    _sum: ApplyJobSumAggregateOutputType | null
    _min: ApplyJobMinAggregateOutputType | null
    _max: ApplyJobMaxAggregateOutputType | null
  }

  export type ApplyJobAvgAggregateOutputType = {
    applyjobid: number | null
    clientid: number | null
    userid: number | null
    jobid: number | null
  }

  export type ApplyJobSumAggregateOutputType = {
    applyjobid: number | null
    clientid: number | null
    userid: number | null
    jobid: number | null
  }

  export type ApplyJobMinAggregateOutputType = {
    applyjobid: number | null
    clientid: number | null
    userid: number | null
    jobtitle: string | null
    budget: string | null
    timeline: string | null
    jobid: number | null
  }

  export type ApplyJobMaxAggregateOutputType = {
    applyjobid: number | null
    clientid: number | null
    userid: number | null
    jobtitle: string | null
    budget: string | null
    timeline: string | null
    jobid: number | null
  }

  export type ApplyJobCountAggregateOutputType = {
    applyjobid: number
    clientid: number
    userid: number
    jobtitle: number
    budget: number
    timeline: number
    jobid: number
    _all: number
  }


  export type ApplyJobAvgAggregateInputType = {
    applyjobid?: true
    clientid?: true
    userid?: true
    jobid?: true
  }

  export type ApplyJobSumAggregateInputType = {
    applyjobid?: true
    clientid?: true
    userid?: true
    jobid?: true
  }

  export type ApplyJobMinAggregateInputType = {
    applyjobid?: true
    clientid?: true
    userid?: true
    jobtitle?: true
    budget?: true
    timeline?: true
    jobid?: true
  }

  export type ApplyJobMaxAggregateInputType = {
    applyjobid?: true
    clientid?: true
    userid?: true
    jobtitle?: true
    budget?: true
    timeline?: true
    jobid?: true
  }

  export type ApplyJobCountAggregateInputType = {
    applyjobid?: true
    clientid?: true
    userid?: true
    jobtitle?: true
    budget?: true
    timeline?: true
    jobid?: true
    _all?: true
  }

  export type ApplyJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplyJob to aggregate.
     */
    where?: ApplyJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplyJobs to fetch.
     */
    orderBy?: ApplyJobOrderByWithRelationInput | ApplyJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplyJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplyJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplyJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplyJobs
    **/
    _count?: true | ApplyJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplyJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplyJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplyJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplyJobMaxAggregateInputType
  }

  export type GetApplyJobAggregateType<T extends ApplyJobAggregateArgs> = {
        [P in keyof T & keyof AggregateApplyJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplyJob[P]>
      : GetScalarType<T[P], AggregateApplyJob[P]>
  }




  export type ApplyJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplyJobWhereInput
    orderBy?: ApplyJobOrderByWithAggregationInput | ApplyJobOrderByWithAggregationInput[]
    by: ApplyJobScalarFieldEnum[] | ApplyJobScalarFieldEnum
    having?: ApplyJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplyJobCountAggregateInputType | true
    _avg?: ApplyJobAvgAggregateInputType
    _sum?: ApplyJobSumAggregateInputType
    _min?: ApplyJobMinAggregateInputType
    _max?: ApplyJobMaxAggregateInputType
  }

  export type ApplyJobGroupByOutputType = {
    applyjobid: number
    clientid: number
    userid: number
    jobtitle: string
    budget: string
    timeline: string
    jobid: number
    _count: ApplyJobCountAggregateOutputType | null
    _avg: ApplyJobAvgAggregateOutputType | null
    _sum: ApplyJobSumAggregateOutputType | null
    _min: ApplyJobMinAggregateOutputType | null
    _max: ApplyJobMaxAggregateOutputType | null
  }

  type GetApplyJobGroupByPayload<T extends ApplyJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplyJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplyJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplyJobGroupByOutputType[P]>
            : GetScalarType<T[P], ApplyJobGroupByOutputType[P]>
        }
      >
    >


  export type ApplyJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    applyjobid?: boolean
    clientid?: boolean
    userid?: boolean
    jobtitle?: boolean
    budget?: boolean
    timeline?: boolean
    jobid?: boolean
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    profile?: boolean | ProfileSchemaDefaultArgs<ExtArgs>
    jobschema?: boolean | JobSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applyJob"]>

  export type ApplyJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    applyjobid?: boolean
    clientid?: boolean
    userid?: boolean
    jobtitle?: boolean
    budget?: boolean
    timeline?: boolean
    jobid?: boolean
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    profile?: boolean | ProfileSchemaDefaultArgs<ExtArgs>
    jobschema?: boolean | JobSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applyJob"]>

  export type ApplyJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    applyjobid?: boolean
    clientid?: boolean
    userid?: boolean
    jobtitle?: boolean
    budget?: boolean
    timeline?: boolean
    jobid?: boolean
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    profile?: boolean | ProfileSchemaDefaultArgs<ExtArgs>
    jobschema?: boolean | JobSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applyJob"]>

  export type ApplyJobSelectScalar = {
    applyjobid?: boolean
    clientid?: boolean
    userid?: boolean
    jobtitle?: boolean
    budget?: boolean
    timeline?: boolean
    jobid?: boolean
  }

  export type ApplyJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"applyjobid" | "clientid" | "userid" | "jobtitle" | "budget" | "timeline" | "jobid", ExtArgs["result"]["applyJob"]>
  export type ApplyJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    profile?: boolean | ProfileSchemaDefaultArgs<ExtArgs>
    jobschema?: boolean | JobSchemaDefaultArgs<ExtArgs>
  }
  export type ApplyJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    profile?: boolean | ProfileSchemaDefaultArgs<ExtArgs>
    jobschema?: boolean | JobSchemaDefaultArgs<ExtArgs>
  }
  export type ApplyJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    profile?: boolean | ProfileSchemaDefaultArgs<ExtArgs>
    jobschema?: boolean | JobSchemaDefaultArgs<ExtArgs>
  }

  export type $ApplyJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApplyJob"
    objects: {
      user: Prisma.$UserSchemaPayload<ExtArgs>
      client: Prisma.$ClientSchemaPayload<ExtArgs>
      profile: Prisma.$ProfileSchemaPayload<ExtArgs>
      jobschema: Prisma.$JobSchemaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      applyjobid: number
      clientid: number
      userid: number
      jobtitle: string
      budget: string
      timeline: string
      jobid: number
    }, ExtArgs["result"]["applyJob"]>
    composites: {}
  }

  type ApplyJobGetPayload<S extends boolean | null | undefined | ApplyJobDefaultArgs> = $Result.GetResult<Prisma.$ApplyJobPayload, S>

  type ApplyJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplyJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplyJobCountAggregateInputType | true
    }

  export interface ApplyJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApplyJob'], meta: { name: 'ApplyJob' } }
    /**
     * Find zero or one ApplyJob that matches the filter.
     * @param {ApplyJobFindUniqueArgs} args - Arguments to find a ApplyJob
     * @example
     * // Get one ApplyJob
     * const applyJob = await prisma.applyJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplyJobFindUniqueArgs>(args: SelectSubset<T, ApplyJobFindUniqueArgs<ExtArgs>>): Prisma__ApplyJobClient<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApplyJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplyJobFindUniqueOrThrowArgs} args - Arguments to find a ApplyJob
     * @example
     * // Get one ApplyJob
     * const applyJob = await prisma.applyJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplyJobFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplyJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplyJobClient<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplyJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplyJobFindFirstArgs} args - Arguments to find a ApplyJob
     * @example
     * // Get one ApplyJob
     * const applyJob = await prisma.applyJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplyJobFindFirstArgs>(args?: SelectSubset<T, ApplyJobFindFirstArgs<ExtArgs>>): Prisma__ApplyJobClient<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplyJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplyJobFindFirstOrThrowArgs} args - Arguments to find a ApplyJob
     * @example
     * // Get one ApplyJob
     * const applyJob = await prisma.applyJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplyJobFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplyJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplyJobClient<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApplyJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplyJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplyJobs
     * const applyJobs = await prisma.applyJob.findMany()
     * 
     * // Get first 10 ApplyJobs
     * const applyJobs = await prisma.applyJob.findMany({ take: 10 })
     * 
     * // Only select the `applyjobid`
     * const applyJobWithApplyjobidOnly = await prisma.applyJob.findMany({ select: { applyjobid: true } })
     * 
     */
    findMany<T extends ApplyJobFindManyArgs>(args?: SelectSubset<T, ApplyJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApplyJob.
     * @param {ApplyJobCreateArgs} args - Arguments to create a ApplyJob.
     * @example
     * // Create one ApplyJob
     * const ApplyJob = await prisma.applyJob.create({
     *   data: {
     *     // ... data to create a ApplyJob
     *   }
     * })
     * 
     */
    create<T extends ApplyJobCreateArgs>(args: SelectSubset<T, ApplyJobCreateArgs<ExtArgs>>): Prisma__ApplyJobClient<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApplyJobs.
     * @param {ApplyJobCreateManyArgs} args - Arguments to create many ApplyJobs.
     * @example
     * // Create many ApplyJobs
     * const applyJob = await prisma.applyJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplyJobCreateManyArgs>(args?: SelectSubset<T, ApplyJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApplyJobs and returns the data saved in the database.
     * @param {ApplyJobCreateManyAndReturnArgs} args - Arguments to create many ApplyJobs.
     * @example
     * // Create many ApplyJobs
     * const applyJob = await prisma.applyJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApplyJobs and only return the `applyjobid`
     * const applyJobWithApplyjobidOnly = await prisma.applyJob.createManyAndReturn({
     *   select: { applyjobid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplyJobCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplyJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApplyJob.
     * @param {ApplyJobDeleteArgs} args - Arguments to delete one ApplyJob.
     * @example
     * // Delete one ApplyJob
     * const ApplyJob = await prisma.applyJob.delete({
     *   where: {
     *     // ... filter to delete one ApplyJob
     *   }
     * })
     * 
     */
    delete<T extends ApplyJobDeleteArgs>(args: SelectSubset<T, ApplyJobDeleteArgs<ExtArgs>>): Prisma__ApplyJobClient<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApplyJob.
     * @param {ApplyJobUpdateArgs} args - Arguments to update one ApplyJob.
     * @example
     * // Update one ApplyJob
     * const applyJob = await prisma.applyJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplyJobUpdateArgs>(args: SelectSubset<T, ApplyJobUpdateArgs<ExtArgs>>): Prisma__ApplyJobClient<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApplyJobs.
     * @param {ApplyJobDeleteManyArgs} args - Arguments to filter ApplyJobs to delete.
     * @example
     * // Delete a few ApplyJobs
     * const { count } = await prisma.applyJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplyJobDeleteManyArgs>(args?: SelectSubset<T, ApplyJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplyJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplyJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplyJobs
     * const applyJob = await prisma.applyJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplyJobUpdateManyArgs>(args: SelectSubset<T, ApplyJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplyJobs and returns the data updated in the database.
     * @param {ApplyJobUpdateManyAndReturnArgs} args - Arguments to update many ApplyJobs.
     * @example
     * // Update many ApplyJobs
     * const applyJob = await prisma.applyJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApplyJobs and only return the `applyjobid`
     * const applyJobWithApplyjobidOnly = await prisma.applyJob.updateManyAndReturn({
     *   select: { applyjobid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplyJobUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplyJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApplyJob.
     * @param {ApplyJobUpsertArgs} args - Arguments to update or create a ApplyJob.
     * @example
     * // Update or create a ApplyJob
     * const applyJob = await prisma.applyJob.upsert({
     *   create: {
     *     // ... data to create a ApplyJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplyJob we want to update
     *   }
     * })
     */
    upsert<T extends ApplyJobUpsertArgs>(args: SelectSubset<T, ApplyJobUpsertArgs<ExtArgs>>): Prisma__ApplyJobClient<$Result.GetResult<Prisma.$ApplyJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApplyJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplyJobCountArgs} args - Arguments to filter ApplyJobs to count.
     * @example
     * // Count the number of ApplyJobs
     * const count = await prisma.applyJob.count({
     *   where: {
     *     // ... the filter for the ApplyJobs we want to count
     *   }
     * })
    **/
    count<T extends ApplyJobCountArgs>(
      args?: Subset<T, ApplyJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplyJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplyJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplyJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplyJobAggregateArgs>(args: Subset<T, ApplyJobAggregateArgs>): Prisma.PrismaPromise<GetApplyJobAggregateType<T>>

    /**
     * Group by ApplyJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplyJobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplyJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplyJobGroupByArgs['orderBy'] }
        : { orderBy?: ApplyJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplyJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplyJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApplyJob model
   */
  readonly fields: ApplyJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplyJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplyJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserSchemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserSchemaDefaultArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientSchemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientSchemaDefaultArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profile<T extends ProfileSchemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileSchemaDefaultArgs<ExtArgs>>): Prisma__ProfileSchemaClient<$Result.GetResult<Prisma.$ProfileSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jobschema<T extends JobSchemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobSchemaDefaultArgs<ExtArgs>>): Prisma__JobSchemaClient<$Result.GetResult<Prisma.$JobSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApplyJob model
   */ 
  interface ApplyJobFieldRefs {
    readonly applyjobid: FieldRef<"ApplyJob", 'Int'>
    readonly clientid: FieldRef<"ApplyJob", 'Int'>
    readonly userid: FieldRef<"ApplyJob", 'Int'>
    readonly jobtitle: FieldRef<"ApplyJob", 'String'>
    readonly budget: FieldRef<"ApplyJob", 'String'>
    readonly timeline: FieldRef<"ApplyJob", 'String'>
    readonly jobid: FieldRef<"ApplyJob", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ApplyJob findUnique
   */
  export type ApplyJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    /**
     * Filter, which ApplyJob to fetch.
     */
    where: ApplyJobWhereUniqueInput
  }

  /**
   * ApplyJob findUniqueOrThrow
   */
  export type ApplyJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    /**
     * Filter, which ApplyJob to fetch.
     */
    where: ApplyJobWhereUniqueInput
  }

  /**
   * ApplyJob findFirst
   */
  export type ApplyJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    /**
     * Filter, which ApplyJob to fetch.
     */
    where?: ApplyJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplyJobs to fetch.
     */
    orderBy?: ApplyJobOrderByWithRelationInput | ApplyJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplyJobs.
     */
    cursor?: ApplyJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplyJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplyJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplyJobs.
     */
    distinct?: ApplyJobScalarFieldEnum | ApplyJobScalarFieldEnum[]
  }

  /**
   * ApplyJob findFirstOrThrow
   */
  export type ApplyJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    /**
     * Filter, which ApplyJob to fetch.
     */
    where?: ApplyJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplyJobs to fetch.
     */
    orderBy?: ApplyJobOrderByWithRelationInput | ApplyJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplyJobs.
     */
    cursor?: ApplyJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplyJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplyJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplyJobs.
     */
    distinct?: ApplyJobScalarFieldEnum | ApplyJobScalarFieldEnum[]
  }

  /**
   * ApplyJob findMany
   */
  export type ApplyJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    /**
     * Filter, which ApplyJobs to fetch.
     */
    where?: ApplyJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplyJobs to fetch.
     */
    orderBy?: ApplyJobOrderByWithRelationInput | ApplyJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplyJobs.
     */
    cursor?: ApplyJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplyJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplyJobs.
     */
    skip?: number
    distinct?: ApplyJobScalarFieldEnum | ApplyJobScalarFieldEnum[]
  }

  /**
   * ApplyJob create
   */
  export type ApplyJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    /**
     * The data needed to create a ApplyJob.
     */
    data: XOR<ApplyJobCreateInput, ApplyJobUncheckedCreateInput>
  }

  /**
   * ApplyJob createMany
   */
  export type ApplyJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplyJobs.
     */
    data: ApplyJobCreateManyInput | ApplyJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApplyJob createManyAndReturn
   */
  export type ApplyJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * The data used to create many ApplyJobs.
     */
    data: ApplyJobCreateManyInput | ApplyJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplyJob update
   */
  export type ApplyJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    /**
     * The data needed to update a ApplyJob.
     */
    data: XOR<ApplyJobUpdateInput, ApplyJobUncheckedUpdateInput>
    /**
     * Choose, which ApplyJob to update.
     */
    where: ApplyJobWhereUniqueInput
  }

  /**
   * ApplyJob updateMany
   */
  export type ApplyJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplyJobs.
     */
    data: XOR<ApplyJobUpdateManyMutationInput, ApplyJobUncheckedUpdateManyInput>
    /**
     * Filter which ApplyJobs to update
     */
    where?: ApplyJobWhereInput
    /**
     * Limit how many ApplyJobs to update.
     */
    limit?: number
  }

  /**
   * ApplyJob updateManyAndReturn
   */
  export type ApplyJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * The data used to update ApplyJobs.
     */
    data: XOR<ApplyJobUpdateManyMutationInput, ApplyJobUncheckedUpdateManyInput>
    /**
     * Filter which ApplyJobs to update
     */
    where?: ApplyJobWhereInput
    /**
     * Limit how many ApplyJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplyJob upsert
   */
  export type ApplyJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    /**
     * The filter to search for the ApplyJob to update in case it exists.
     */
    where: ApplyJobWhereUniqueInput
    /**
     * In case the ApplyJob found by the `where` argument doesn't exist, create a new ApplyJob with this data.
     */
    create: XOR<ApplyJobCreateInput, ApplyJobUncheckedCreateInput>
    /**
     * In case the ApplyJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplyJobUpdateInput, ApplyJobUncheckedUpdateInput>
  }

  /**
   * ApplyJob delete
   */
  export type ApplyJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
    /**
     * Filter which ApplyJob to delete.
     */
    where: ApplyJobWhereUniqueInput
  }

  /**
   * ApplyJob deleteMany
   */
  export type ApplyJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplyJobs to delete
     */
    where?: ApplyJobWhereInput
    /**
     * Limit how many ApplyJobs to delete.
     */
    limit?: number
  }

  /**
   * ApplyJob without action
   */
  export type ApplyJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplyJob
     */
    select?: ApplyJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplyJob
     */
    omit?: ApplyJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplyJobInclude<ExtArgs> | null
  }


  /**
   * Model AcceptedProject
   */

  export type AggregateAcceptedProject = {
    _count: AcceptedProjectCountAggregateOutputType | null
    _avg: AcceptedProjectAvgAggregateOutputType | null
    _sum: AcceptedProjectSumAggregateOutputType | null
    _min: AcceptedProjectMinAggregateOutputType | null
    _max: AcceptedProjectMaxAggregateOutputType | null
  }

  export type AcceptedProjectAvgAggregateOutputType = {
    aaplyproject: number | null
    client_id: number | null
    userid: number | null
  }

  export type AcceptedProjectSumAggregateOutputType = {
    aaplyproject: number | null
    client_id: number | null
    userid: number | null
  }

  export type AcceptedProjectMinAggregateOutputType = {
    aaplyproject: number | null
    client_id: number | null
    userid: number | null
    project_title: string | null
    budget: string | null
    timeline: string | null
  }

  export type AcceptedProjectMaxAggregateOutputType = {
    aaplyproject: number | null
    client_id: number | null
    userid: number | null
    project_title: string | null
    budget: string | null
    timeline: string | null
  }

  export type AcceptedProjectCountAggregateOutputType = {
    aaplyproject: number
    client_id: number
    userid: number
    project_title: number
    budget: number
    timeline: number
    _all: number
  }


  export type AcceptedProjectAvgAggregateInputType = {
    aaplyproject?: true
    client_id?: true
    userid?: true
  }

  export type AcceptedProjectSumAggregateInputType = {
    aaplyproject?: true
    client_id?: true
    userid?: true
  }

  export type AcceptedProjectMinAggregateInputType = {
    aaplyproject?: true
    client_id?: true
    userid?: true
    project_title?: true
    budget?: true
    timeline?: true
  }

  export type AcceptedProjectMaxAggregateInputType = {
    aaplyproject?: true
    client_id?: true
    userid?: true
    project_title?: true
    budget?: true
    timeline?: true
  }

  export type AcceptedProjectCountAggregateInputType = {
    aaplyproject?: true
    client_id?: true
    userid?: true
    project_title?: true
    budget?: true
    timeline?: true
    _all?: true
  }

  export type AcceptedProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcceptedProject to aggregate.
     */
    where?: AcceptedProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcceptedProjects to fetch.
     */
    orderBy?: AcceptedProjectOrderByWithRelationInput | AcceptedProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcceptedProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcceptedProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcceptedProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AcceptedProjects
    **/
    _count?: true | AcceptedProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AcceptedProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AcceptedProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcceptedProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcceptedProjectMaxAggregateInputType
  }

  export type GetAcceptedProjectAggregateType<T extends AcceptedProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateAcceptedProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcceptedProject[P]>
      : GetScalarType<T[P], AggregateAcceptedProject[P]>
  }




  export type AcceptedProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcceptedProjectWhereInput
    orderBy?: AcceptedProjectOrderByWithAggregationInput | AcceptedProjectOrderByWithAggregationInput[]
    by: AcceptedProjectScalarFieldEnum[] | AcceptedProjectScalarFieldEnum
    having?: AcceptedProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcceptedProjectCountAggregateInputType | true
    _avg?: AcceptedProjectAvgAggregateInputType
    _sum?: AcceptedProjectSumAggregateInputType
    _min?: AcceptedProjectMinAggregateInputType
    _max?: AcceptedProjectMaxAggregateInputType
  }

  export type AcceptedProjectGroupByOutputType = {
    aaplyproject: number
    client_id: number
    userid: number
    project_title: string
    budget: string
    timeline: string
    _count: AcceptedProjectCountAggregateOutputType | null
    _avg: AcceptedProjectAvgAggregateOutputType | null
    _sum: AcceptedProjectSumAggregateOutputType | null
    _min: AcceptedProjectMinAggregateOutputType | null
    _max: AcceptedProjectMaxAggregateOutputType | null
  }

  type GetAcceptedProjectGroupByPayload<T extends AcceptedProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcceptedProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcceptedProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcceptedProjectGroupByOutputType[P]>
            : GetScalarType<T[P], AcceptedProjectGroupByOutputType[P]>
        }
      >
    >


  export type AcceptedProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    aaplyproject?: boolean
    client_id?: boolean
    userid?: boolean
    project_title?: boolean
    budget?: boolean
    timeline?: boolean
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acceptedProject"]>

  export type AcceptedProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    aaplyproject?: boolean
    client_id?: boolean
    userid?: boolean
    project_title?: boolean
    budget?: boolean
    timeline?: boolean
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acceptedProject"]>

  export type AcceptedProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    aaplyproject?: boolean
    client_id?: boolean
    userid?: boolean
    project_title?: boolean
    budget?: boolean
    timeline?: boolean
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acceptedProject"]>

  export type AcceptedProjectSelectScalar = {
    aaplyproject?: boolean
    client_id?: boolean
    userid?: boolean
    project_title?: boolean
    budget?: boolean
    timeline?: boolean
  }

  export type AcceptedProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"aaplyproject" | "client_id" | "userid" | "project_title" | "budget" | "timeline", ExtArgs["result"]["acceptedProject"]>
  export type AcceptedProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
  }
  export type AcceptedProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
  }
  export type AcceptedProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
  }

  export type $AcceptedProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AcceptedProject"
    objects: {
      client: Prisma.$ClientSchemaPayload<ExtArgs>
      user: Prisma.$UserSchemaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      aaplyproject: number
      client_id: number
      userid: number
      project_title: string
      budget: string
      timeline: string
    }, ExtArgs["result"]["acceptedProject"]>
    composites: {}
  }

  type AcceptedProjectGetPayload<S extends boolean | null | undefined | AcceptedProjectDefaultArgs> = $Result.GetResult<Prisma.$AcceptedProjectPayload, S>

  type AcceptedProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcceptedProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcceptedProjectCountAggregateInputType | true
    }

  export interface AcceptedProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AcceptedProject'], meta: { name: 'AcceptedProject' } }
    /**
     * Find zero or one AcceptedProject that matches the filter.
     * @param {AcceptedProjectFindUniqueArgs} args - Arguments to find a AcceptedProject
     * @example
     * // Get one AcceptedProject
     * const acceptedProject = await prisma.acceptedProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcceptedProjectFindUniqueArgs>(args: SelectSubset<T, AcceptedProjectFindUniqueArgs<ExtArgs>>): Prisma__AcceptedProjectClient<$Result.GetResult<Prisma.$AcceptedProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AcceptedProject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcceptedProjectFindUniqueOrThrowArgs} args - Arguments to find a AcceptedProject
     * @example
     * // Get one AcceptedProject
     * const acceptedProject = await prisma.acceptedProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcceptedProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, AcceptedProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcceptedProjectClient<$Result.GetResult<Prisma.$AcceptedProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcceptedProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedProjectFindFirstArgs} args - Arguments to find a AcceptedProject
     * @example
     * // Get one AcceptedProject
     * const acceptedProject = await prisma.acceptedProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcceptedProjectFindFirstArgs>(args?: SelectSubset<T, AcceptedProjectFindFirstArgs<ExtArgs>>): Prisma__AcceptedProjectClient<$Result.GetResult<Prisma.$AcceptedProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcceptedProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedProjectFindFirstOrThrowArgs} args - Arguments to find a AcceptedProject
     * @example
     * // Get one AcceptedProject
     * const acceptedProject = await prisma.acceptedProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcceptedProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, AcceptedProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcceptedProjectClient<$Result.GetResult<Prisma.$AcceptedProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AcceptedProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcceptedProjects
     * const acceptedProjects = await prisma.acceptedProject.findMany()
     * 
     * // Get first 10 AcceptedProjects
     * const acceptedProjects = await prisma.acceptedProject.findMany({ take: 10 })
     * 
     * // Only select the `aaplyproject`
     * const acceptedProjectWithAaplyprojectOnly = await prisma.acceptedProject.findMany({ select: { aaplyproject: true } })
     * 
     */
    findMany<T extends AcceptedProjectFindManyArgs>(args?: SelectSubset<T, AcceptedProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcceptedProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AcceptedProject.
     * @param {AcceptedProjectCreateArgs} args - Arguments to create a AcceptedProject.
     * @example
     * // Create one AcceptedProject
     * const AcceptedProject = await prisma.acceptedProject.create({
     *   data: {
     *     // ... data to create a AcceptedProject
     *   }
     * })
     * 
     */
    create<T extends AcceptedProjectCreateArgs>(args: SelectSubset<T, AcceptedProjectCreateArgs<ExtArgs>>): Prisma__AcceptedProjectClient<$Result.GetResult<Prisma.$AcceptedProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AcceptedProjects.
     * @param {AcceptedProjectCreateManyArgs} args - Arguments to create many AcceptedProjects.
     * @example
     * // Create many AcceptedProjects
     * const acceptedProject = await prisma.acceptedProject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcceptedProjectCreateManyArgs>(args?: SelectSubset<T, AcceptedProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AcceptedProjects and returns the data saved in the database.
     * @param {AcceptedProjectCreateManyAndReturnArgs} args - Arguments to create many AcceptedProjects.
     * @example
     * // Create many AcceptedProjects
     * const acceptedProject = await prisma.acceptedProject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AcceptedProjects and only return the `aaplyproject`
     * const acceptedProjectWithAaplyprojectOnly = await prisma.acceptedProject.createManyAndReturn({
     *   select: { aaplyproject: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AcceptedProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, AcceptedProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcceptedProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AcceptedProject.
     * @param {AcceptedProjectDeleteArgs} args - Arguments to delete one AcceptedProject.
     * @example
     * // Delete one AcceptedProject
     * const AcceptedProject = await prisma.acceptedProject.delete({
     *   where: {
     *     // ... filter to delete one AcceptedProject
     *   }
     * })
     * 
     */
    delete<T extends AcceptedProjectDeleteArgs>(args: SelectSubset<T, AcceptedProjectDeleteArgs<ExtArgs>>): Prisma__AcceptedProjectClient<$Result.GetResult<Prisma.$AcceptedProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AcceptedProject.
     * @param {AcceptedProjectUpdateArgs} args - Arguments to update one AcceptedProject.
     * @example
     * // Update one AcceptedProject
     * const acceptedProject = await prisma.acceptedProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcceptedProjectUpdateArgs>(args: SelectSubset<T, AcceptedProjectUpdateArgs<ExtArgs>>): Prisma__AcceptedProjectClient<$Result.GetResult<Prisma.$AcceptedProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AcceptedProjects.
     * @param {AcceptedProjectDeleteManyArgs} args - Arguments to filter AcceptedProjects to delete.
     * @example
     * // Delete a few AcceptedProjects
     * const { count } = await prisma.acceptedProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcceptedProjectDeleteManyArgs>(args?: SelectSubset<T, AcceptedProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcceptedProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcceptedProjects
     * const acceptedProject = await prisma.acceptedProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcceptedProjectUpdateManyArgs>(args: SelectSubset<T, AcceptedProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcceptedProjects and returns the data updated in the database.
     * @param {AcceptedProjectUpdateManyAndReturnArgs} args - Arguments to update many AcceptedProjects.
     * @example
     * // Update many AcceptedProjects
     * const acceptedProject = await prisma.acceptedProject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AcceptedProjects and only return the `aaplyproject`
     * const acceptedProjectWithAaplyprojectOnly = await prisma.acceptedProject.updateManyAndReturn({
     *   select: { aaplyproject: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AcceptedProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, AcceptedProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcceptedProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AcceptedProject.
     * @param {AcceptedProjectUpsertArgs} args - Arguments to update or create a AcceptedProject.
     * @example
     * // Update or create a AcceptedProject
     * const acceptedProject = await prisma.acceptedProject.upsert({
     *   create: {
     *     // ... data to create a AcceptedProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcceptedProject we want to update
     *   }
     * })
     */
    upsert<T extends AcceptedProjectUpsertArgs>(args: SelectSubset<T, AcceptedProjectUpsertArgs<ExtArgs>>): Prisma__AcceptedProjectClient<$Result.GetResult<Prisma.$AcceptedProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AcceptedProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedProjectCountArgs} args - Arguments to filter AcceptedProjects to count.
     * @example
     * // Count the number of AcceptedProjects
     * const count = await prisma.acceptedProject.count({
     *   where: {
     *     // ... the filter for the AcceptedProjects we want to count
     *   }
     * })
    **/
    count<T extends AcceptedProjectCountArgs>(
      args?: Subset<T, AcceptedProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcceptedProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AcceptedProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AcceptedProjectAggregateArgs>(args: Subset<T, AcceptedProjectAggregateArgs>): Prisma.PrismaPromise<GetAcceptedProjectAggregateType<T>>

    /**
     * Group by AcceptedProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AcceptedProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcceptedProjectGroupByArgs['orderBy'] }
        : { orderBy?: AcceptedProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AcceptedProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcceptedProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AcceptedProject model
   */
  readonly fields: AcceptedProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AcceptedProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcceptedProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientSchemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientSchemaDefaultArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserSchemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserSchemaDefaultArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AcceptedProject model
   */ 
  interface AcceptedProjectFieldRefs {
    readonly aaplyproject: FieldRef<"AcceptedProject", 'Int'>
    readonly client_id: FieldRef<"AcceptedProject", 'Int'>
    readonly userid: FieldRef<"AcceptedProject", 'Int'>
    readonly project_title: FieldRef<"AcceptedProject", 'String'>
    readonly budget: FieldRef<"AcceptedProject", 'String'>
    readonly timeline: FieldRef<"AcceptedProject", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AcceptedProject findUnique
   */
  export type AcceptedProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedProject
     */
    select?: AcceptedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedProject
     */
    omit?: AcceptedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedProjectInclude<ExtArgs> | null
    /**
     * Filter, which AcceptedProject to fetch.
     */
    where: AcceptedProjectWhereUniqueInput
  }

  /**
   * AcceptedProject findUniqueOrThrow
   */
  export type AcceptedProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedProject
     */
    select?: AcceptedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedProject
     */
    omit?: AcceptedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedProjectInclude<ExtArgs> | null
    /**
     * Filter, which AcceptedProject to fetch.
     */
    where: AcceptedProjectWhereUniqueInput
  }

  /**
   * AcceptedProject findFirst
   */
  export type AcceptedProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedProject
     */
    select?: AcceptedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedProject
     */
    omit?: AcceptedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedProjectInclude<ExtArgs> | null
    /**
     * Filter, which AcceptedProject to fetch.
     */
    where?: AcceptedProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcceptedProjects to fetch.
     */
    orderBy?: AcceptedProjectOrderByWithRelationInput | AcceptedProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcceptedProjects.
     */
    cursor?: AcceptedProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcceptedProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcceptedProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcceptedProjects.
     */
    distinct?: AcceptedProjectScalarFieldEnum | AcceptedProjectScalarFieldEnum[]
  }

  /**
   * AcceptedProject findFirstOrThrow
   */
  export type AcceptedProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedProject
     */
    select?: AcceptedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedProject
     */
    omit?: AcceptedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedProjectInclude<ExtArgs> | null
    /**
     * Filter, which AcceptedProject to fetch.
     */
    where?: AcceptedProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcceptedProjects to fetch.
     */
    orderBy?: AcceptedProjectOrderByWithRelationInput | AcceptedProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcceptedProjects.
     */
    cursor?: AcceptedProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcceptedProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcceptedProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcceptedProjects.
     */
    distinct?: AcceptedProjectScalarFieldEnum | AcceptedProjectScalarFieldEnum[]
  }

  /**
   * AcceptedProject findMany
   */
  export type AcceptedProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedProject
     */
    select?: AcceptedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedProject
     */
    omit?: AcceptedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedProjectInclude<ExtArgs> | null
    /**
     * Filter, which AcceptedProjects to fetch.
     */
    where?: AcceptedProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcceptedProjects to fetch.
     */
    orderBy?: AcceptedProjectOrderByWithRelationInput | AcceptedProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AcceptedProjects.
     */
    cursor?: AcceptedProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcceptedProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcceptedProjects.
     */
    skip?: number
    distinct?: AcceptedProjectScalarFieldEnum | AcceptedProjectScalarFieldEnum[]
  }

  /**
   * AcceptedProject create
   */
  export type AcceptedProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedProject
     */
    select?: AcceptedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedProject
     */
    omit?: AcceptedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a AcceptedProject.
     */
    data: XOR<AcceptedProjectCreateInput, AcceptedProjectUncheckedCreateInput>
  }

  /**
   * AcceptedProject createMany
   */
  export type AcceptedProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AcceptedProjects.
     */
    data: AcceptedProjectCreateManyInput | AcceptedProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcceptedProject createManyAndReturn
   */
  export type AcceptedProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedProject
     */
    select?: AcceptedProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedProject
     */
    omit?: AcceptedProjectOmit<ExtArgs> | null
    /**
     * The data used to create many AcceptedProjects.
     */
    data: AcceptedProjectCreateManyInput | AcceptedProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AcceptedProject update
   */
  export type AcceptedProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedProject
     */
    select?: AcceptedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedProject
     */
    omit?: AcceptedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a AcceptedProject.
     */
    data: XOR<AcceptedProjectUpdateInput, AcceptedProjectUncheckedUpdateInput>
    /**
     * Choose, which AcceptedProject to update.
     */
    where: AcceptedProjectWhereUniqueInput
  }

  /**
   * AcceptedProject updateMany
   */
  export type AcceptedProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AcceptedProjects.
     */
    data: XOR<AcceptedProjectUpdateManyMutationInput, AcceptedProjectUncheckedUpdateManyInput>
    /**
     * Filter which AcceptedProjects to update
     */
    where?: AcceptedProjectWhereInput
    /**
     * Limit how many AcceptedProjects to update.
     */
    limit?: number
  }

  /**
   * AcceptedProject updateManyAndReturn
   */
  export type AcceptedProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedProject
     */
    select?: AcceptedProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedProject
     */
    omit?: AcceptedProjectOmit<ExtArgs> | null
    /**
     * The data used to update AcceptedProjects.
     */
    data: XOR<AcceptedProjectUpdateManyMutationInput, AcceptedProjectUncheckedUpdateManyInput>
    /**
     * Filter which AcceptedProjects to update
     */
    where?: AcceptedProjectWhereInput
    /**
     * Limit how many AcceptedProjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AcceptedProject upsert
   */
  export type AcceptedProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedProject
     */
    select?: AcceptedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedProject
     */
    omit?: AcceptedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the AcceptedProject to update in case it exists.
     */
    where: AcceptedProjectWhereUniqueInput
    /**
     * In case the AcceptedProject found by the `where` argument doesn't exist, create a new AcceptedProject with this data.
     */
    create: XOR<AcceptedProjectCreateInput, AcceptedProjectUncheckedCreateInput>
    /**
     * In case the AcceptedProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcceptedProjectUpdateInput, AcceptedProjectUncheckedUpdateInput>
  }

  /**
   * AcceptedProject delete
   */
  export type AcceptedProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedProject
     */
    select?: AcceptedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedProject
     */
    omit?: AcceptedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedProjectInclude<ExtArgs> | null
    /**
     * Filter which AcceptedProject to delete.
     */
    where: AcceptedProjectWhereUniqueInput
  }

  /**
   * AcceptedProject deleteMany
   */
  export type AcceptedProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcceptedProjects to delete
     */
    where?: AcceptedProjectWhereInput
    /**
     * Limit how many AcceptedProjects to delete.
     */
    limit?: number
  }

  /**
   * AcceptedProject without action
   */
  export type AcceptedProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedProject
     */
    select?: AcceptedProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedProject
     */
    omit?: AcceptedProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedProjectInclude<ExtArgs> | null
  }


  /**
   * Model BankSchema
   */

  export type AggregateBankSchema = {
    _count: BankSchemaCountAggregateOutputType | null
    _avg: BankSchemaAvgAggregateOutputType | null
    _sum: BankSchemaSumAggregateOutputType | null
    _min: BankSchemaMinAggregateOutputType | null
    _max: BankSchemaMaxAggregateOutputType | null
  }

  export type BankSchemaAvgAggregateOutputType = {
    accountid: number | null
  }

  export type BankSchemaSumAggregateOutputType = {
    accountid: number | null
  }

  export type BankSchemaMinAggregateOutputType = {
    accountid: number | null
    email: string | null
    accountnumber: string | null
    amount: string | null
  }

  export type BankSchemaMaxAggregateOutputType = {
    accountid: number | null
    email: string | null
    accountnumber: string | null
    amount: string | null
  }

  export type BankSchemaCountAggregateOutputType = {
    accountid: number
    email: number
    accountnumber: number
    amount: number
    _all: number
  }


  export type BankSchemaAvgAggregateInputType = {
    accountid?: true
  }

  export type BankSchemaSumAggregateInputType = {
    accountid?: true
  }

  export type BankSchemaMinAggregateInputType = {
    accountid?: true
    email?: true
    accountnumber?: true
    amount?: true
  }

  export type BankSchemaMaxAggregateInputType = {
    accountid?: true
    email?: true
    accountnumber?: true
    amount?: true
  }

  export type BankSchemaCountAggregateInputType = {
    accountid?: true
    email?: true
    accountnumber?: true
    amount?: true
    _all?: true
  }

  export type BankSchemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankSchema to aggregate.
     */
    where?: BankSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankSchemas to fetch.
     */
    orderBy?: BankSchemaOrderByWithRelationInput | BankSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BankSchemas
    **/
    _count?: true | BankSchemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankSchemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankSchemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankSchemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankSchemaMaxAggregateInputType
  }

  export type GetBankSchemaAggregateType<T extends BankSchemaAggregateArgs> = {
        [P in keyof T & keyof AggregateBankSchema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankSchema[P]>
      : GetScalarType<T[P], AggregateBankSchema[P]>
  }




  export type BankSchemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankSchemaWhereInput
    orderBy?: BankSchemaOrderByWithAggregationInput | BankSchemaOrderByWithAggregationInput[]
    by: BankSchemaScalarFieldEnum[] | BankSchemaScalarFieldEnum
    having?: BankSchemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankSchemaCountAggregateInputType | true
    _avg?: BankSchemaAvgAggregateInputType
    _sum?: BankSchemaSumAggregateInputType
    _min?: BankSchemaMinAggregateInputType
    _max?: BankSchemaMaxAggregateInputType
  }

  export type BankSchemaGroupByOutputType = {
    accountid: number
    email: string
    accountnumber: string
    amount: string
    _count: BankSchemaCountAggregateOutputType | null
    _avg: BankSchemaAvgAggregateOutputType | null
    _sum: BankSchemaSumAggregateOutputType | null
    _min: BankSchemaMinAggregateOutputType | null
    _max: BankSchemaMaxAggregateOutputType | null
  }

  type GetBankSchemaGroupByPayload<T extends BankSchemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankSchemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankSchemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankSchemaGroupByOutputType[P]>
            : GetScalarType<T[P], BankSchemaGroupByOutputType[P]>
        }
      >
    >


  export type BankSchemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accountid?: boolean
    email?: boolean
    accountnumber?: boolean
    amount?: boolean
  }, ExtArgs["result"]["bankSchema"]>

  export type BankSchemaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accountid?: boolean
    email?: boolean
    accountnumber?: boolean
    amount?: boolean
  }, ExtArgs["result"]["bankSchema"]>

  export type BankSchemaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accountid?: boolean
    email?: boolean
    accountnumber?: boolean
    amount?: boolean
  }, ExtArgs["result"]["bankSchema"]>

  export type BankSchemaSelectScalar = {
    accountid?: boolean
    email?: boolean
    accountnumber?: boolean
    amount?: boolean
  }

  export type BankSchemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"accountid" | "email" | "accountnumber" | "amount", ExtArgs["result"]["bankSchema"]>

  export type $BankSchemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BankSchema"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      accountid: number
      email: string
      accountnumber: string
      amount: string
    }, ExtArgs["result"]["bankSchema"]>
    composites: {}
  }

  type BankSchemaGetPayload<S extends boolean | null | undefined | BankSchemaDefaultArgs> = $Result.GetResult<Prisma.$BankSchemaPayload, S>

  type BankSchemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BankSchemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankSchemaCountAggregateInputType | true
    }

  export interface BankSchemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BankSchema'], meta: { name: 'BankSchema' } }
    /**
     * Find zero or one BankSchema that matches the filter.
     * @param {BankSchemaFindUniqueArgs} args - Arguments to find a BankSchema
     * @example
     * // Get one BankSchema
     * const bankSchema = await prisma.bankSchema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankSchemaFindUniqueArgs>(args: SelectSubset<T, BankSchemaFindUniqueArgs<ExtArgs>>): Prisma__BankSchemaClient<$Result.GetResult<Prisma.$BankSchemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BankSchema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BankSchemaFindUniqueOrThrowArgs} args - Arguments to find a BankSchema
     * @example
     * // Get one BankSchema
     * const bankSchema = await prisma.bankSchema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankSchemaFindUniqueOrThrowArgs>(args: SelectSubset<T, BankSchemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankSchemaClient<$Result.GetResult<Prisma.$BankSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankSchema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankSchemaFindFirstArgs} args - Arguments to find a BankSchema
     * @example
     * // Get one BankSchema
     * const bankSchema = await prisma.bankSchema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankSchemaFindFirstArgs>(args?: SelectSubset<T, BankSchemaFindFirstArgs<ExtArgs>>): Prisma__BankSchemaClient<$Result.GetResult<Prisma.$BankSchemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankSchema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankSchemaFindFirstOrThrowArgs} args - Arguments to find a BankSchema
     * @example
     * // Get one BankSchema
     * const bankSchema = await prisma.bankSchema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankSchemaFindFirstOrThrowArgs>(args?: SelectSubset<T, BankSchemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankSchemaClient<$Result.GetResult<Prisma.$BankSchemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BankSchemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankSchemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankSchemas
     * const bankSchemas = await prisma.bankSchema.findMany()
     * 
     * // Get first 10 BankSchemas
     * const bankSchemas = await prisma.bankSchema.findMany({ take: 10 })
     * 
     * // Only select the `accountid`
     * const bankSchemaWithAccountidOnly = await prisma.bankSchema.findMany({ select: { accountid: true } })
     * 
     */
    findMany<T extends BankSchemaFindManyArgs>(args?: SelectSubset<T, BankSchemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankSchemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BankSchema.
     * @param {BankSchemaCreateArgs} args - Arguments to create a BankSchema.
     * @example
     * // Create one BankSchema
     * const BankSchema = await prisma.bankSchema.create({
     *   data: {
     *     // ... data to create a BankSchema
     *   }
     * })
     * 
     */
    create<T extends BankSchemaCreateArgs>(args: SelectSubset<T, BankSchemaCreateArgs<ExtArgs>>): Prisma__BankSchemaClient<$Result.GetResult<Prisma.$BankSchemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BankSchemas.
     * @param {BankSchemaCreateManyArgs} args - Arguments to create many BankSchemas.
     * @example
     * // Create many BankSchemas
     * const bankSchema = await prisma.bankSchema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankSchemaCreateManyArgs>(args?: SelectSubset<T, BankSchemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BankSchemas and returns the data saved in the database.
     * @param {BankSchemaCreateManyAndReturnArgs} args - Arguments to create many BankSchemas.
     * @example
     * // Create many BankSchemas
     * const bankSchema = await prisma.bankSchema.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BankSchemas and only return the `accountid`
     * const bankSchemaWithAccountidOnly = await prisma.bankSchema.createManyAndReturn({
     *   select: { accountid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BankSchemaCreateManyAndReturnArgs>(args?: SelectSubset<T, BankSchemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankSchemaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BankSchema.
     * @param {BankSchemaDeleteArgs} args - Arguments to delete one BankSchema.
     * @example
     * // Delete one BankSchema
     * const BankSchema = await prisma.bankSchema.delete({
     *   where: {
     *     // ... filter to delete one BankSchema
     *   }
     * })
     * 
     */
    delete<T extends BankSchemaDeleteArgs>(args: SelectSubset<T, BankSchemaDeleteArgs<ExtArgs>>): Prisma__BankSchemaClient<$Result.GetResult<Prisma.$BankSchemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BankSchema.
     * @param {BankSchemaUpdateArgs} args - Arguments to update one BankSchema.
     * @example
     * // Update one BankSchema
     * const bankSchema = await prisma.bankSchema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankSchemaUpdateArgs>(args: SelectSubset<T, BankSchemaUpdateArgs<ExtArgs>>): Prisma__BankSchemaClient<$Result.GetResult<Prisma.$BankSchemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BankSchemas.
     * @param {BankSchemaDeleteManyArgs} args - Arguments to filter BankSchemas to delete.
     * @example
     * // Delete a few BankSchemas
     * const { count } = await prisma.bankSchema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankSchemaDeleteManyArgs>(args?: SelectSubset<T, BankSchemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankSchemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankSchemas
     * const bankSchema = await prisma.bankSchema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankSchemaUpdateManyArgs>(args: SelectSubset<T, BankSchemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankSchemas and returns the data updated in the database.
     * @param {BankSchemaUpdateManyAndReturnArgs} args - Arguments to update many BankSchemas.
     * @example
     * // Update many BankSchemas
     * const bankSchema = await prisma.bankSchema.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BankSchemas and only return the `accountid`
     * const bankSchemaWithAccountidOnly = await prisma.bankSchema.updateManyAndReturn({
     *   select: { accountid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BankSchemaUpdateManyAndReturnArgs>(args: SelectSubset<T, BankSchemaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankSchemaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BankSchema.
     * @param {BankSchemaUpsertArgs} args - Arguments to update or create a BankSchema.
     * @example
     * // Update or create a BankSchema
     * const bankSchema = await prisma.bankSchema.upsert({
     *   create: {
     *     // ... data to create a BankSchema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankSchema we want to update
     *   }
     * })
     */
    upsert<T extends BankSchemaUpsertArgs>(args: SelectSubset<T, BankSchemaUpsertArgs<ExtArgs>>): Prisma__BankSchemaClient<$Result.GetResult<Prisma.$BankSchemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BankSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankSchemaCountArgs} args - Arguments to filter BankSchemas to count.
     * @example
     * // Count the number of BankSchemas
     * const count = await prisma.bankSchema.count({
     *   where: {
     *     // ... the filter for the BankSchemas we want to count
     *   }
     * })
    **/
    count<T extends BankSchemaCountArgs>(
      args?: Subset<T, BankSchemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankSchemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankSchemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BankSchemaAggregateArgs>(args: Subset<T, BankSchemaAggregateArgs>): Prisma.PrismaPromise<GetBankSchemaAggregateType<T>>

    /**
     * Group by BankSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankSchemaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BankSchemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankSchemaGroupByArgs['orderBy'] }
        : { orderBy?: BankSchemaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BankSchemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankSchemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BankSchema model
   */
  readonly fields: BankSchemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BankSchema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankSchemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BankSchema model
   */ 
  interface BankSchemaFieldRefs {
    readonly accountid: FieldRef<"BankSchema", 'Int'>
    readonly email: FieldRef<"BankSchema", 'String'>
    readonly accountnumber: FieldRef<"BankSchema", 'String'>
    readonly amount: FieldRef<"BankSchema", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BankSchema findUnique
   */
  export type BankSchemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSchema
     */
    select?: BankSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankSchema
     */
    omit?: BankSchemaOmit<ExtArgs> | null
    /**
     * Filter, which BankSchema to fetch.
     */
    where: BankSchemaWhereUniqueInput
  }

  /**
   * BankSchema findUniqueOrThrow
   */
  export type BankSchemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSchema
     */
    select?: BankSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankSchema
     */
    omit?: BankSchemaOmit<ExtArgs> | null
    /**
     * Filter, which BankSchema to fetch.
     */
    where: BankSchemaWhereUniqueInput
  }

  /**
   * BankSchema findFirst
   */
  export type BankSchemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSchema
     */
    select?: BankSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankSchema
     */
    omit?: BankSchemaOmit<ExtArgs> | null
    /**
     * Filter, which BankSchema to fetch.
     */
    where?: BankSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankSchemas to fetch.
     */
    orderBy?: BankSchemaOrderByWithRelationInput | BankSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankSchemas.
     */
    cursor?: BankSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankSchemas.
     */
    distinct?: BankSchemaScalarFieldEnum | BankSchemaScalarFieldEnum[]
  }

  /**
   * BankSchema findFirstOrThrow
   */
  export type BankSchemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSchema
     */
    select?: BankSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankSchema
     */
    omit?: BankSchemaOmit<ExtArgs> | null
    /**
     * Filter, which BankSchema to fetch.
     */
    where?: BankSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankSchemas to fetch.
     */
    orderBy?: BankSchemaOrderByWithRelationInput | BankSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankSchemas.
     */
    cursor?: BankSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankSchemas.
     */
    distinct?: BankSchemaScalarFieldEnum | BankSchemaScalarFieldEnum[]
  }

  /**
   * BankSchema findMany
   */
  export type BankSchemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSchema
     */
    select?: BankSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankSchema
     */
    omit?: BankSchemaOmit<ExtArgs> | null
    /**
     * Filter, which BankSchemas to fetch.
     */
    where?: BankSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankSchemas to fetch.
     */
    orderBy?: BankSchemaOrderByWithRelationInput | BankSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BankSchemas.
     */
    cursor?: BankSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankSchemas.
     */
    skip?: number
    distinct?: BankSchemaScalarFieldEnum | BankSchemaScalarFieldEnum[]
  }

  /**
   * BankSchema create
   */
  export type BankSchemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSchema
     */
    select?: BankSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankSchema
     */
    omit?: BankSchemaOmit<ExtArgs> | null
    /**
     * The data needed to create a BankSchema.
     */
    data: XOR<BankSchemaCreateInput, BankSchemaUncheckedCreateInput>
  }

  /**
   * BankSchema createMany
   */
  export type BankSchemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BankSchemas.
     */
    data: BankSchemaCreateManyInput | BankSchemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BankSchema createManyAndReturn
   */
  export type BankSchemaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSchema
     */
    select?: BankSchemaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankSchema
     */
    omit?: BankSchemaOmit<ExtArgs> | null
    /**
     * The data used to create many BankSchemas.
     */
    data: BankSchemaCreateManyInput | BankSchemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BankSchema update
   */
  export type BankSchemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSchema
     */
    select?: BankSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankSchema
     */
    omit?: BankSchemaOmit<ExtArgs> | null
    /**
     * The data needed to update a BankSchema.
     */
    data: XOR<BankSchemaUpdateInput, BankSchemaUncheckedUpdateInput>
    /**
     * Choose, which BankSchema to update.
     */
    where: BankSchemaWhereUniqueInput
  }

  /**
   * BankSchema updateMany
   */
  export type BankSchemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BankSchemas.
     */
    data: XOR<BankSchemaUpdateManyMutationInput, BankSchemaUncheckedUpdateManyInput>
    /**
     * Filter which BankSchemas to update
     */
    where?: BankSchemaWhereInput
    /**
     * Limit how many BankSchemas to update.
     */
    limit?: number
  }

  /**
   * BankSchema updateManyAndReturn
   */
  export type BankSchemaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSchema
     */
    select?: BankSchemaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankSchema
     */
    omit?: BankSchemaOmit<ExtArgs> | null
    /**
     * The data used to update BankSchemas.
     */
    data: XOR<BankSchemaUpdateManyMutationInput, BankSchemaUncheckedUpdateManyInput>
    /**
     * Filter which BankSchemas to update
     */
    where?: BankSchemaWhereInput
    /**
     * Limit how many BankSchemas to update.
     */
    limit?: number
  }

  /**
   * BankSchema upsert
   */
  export type BankSchemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSchema
     */
    select?: BankSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankSchema
     */
    omit?: BankSchemaOmit<ExtArgs> | null
    /**
     * The filter to search for the BankSchema to update in case it exists.
     */
    where: BankSchemaWhereUniqueInput
    /**
     * In case the BankSchema found by the `where` argument doesn't exist, create a new BankSchema with this data.
     */
    create: XOR<BankSchemaCreateInput, BankSchemaUncheckedCreateInput>
    /**
     * In case the BankSchema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankSchemaUpdateInput, BankSchemaUncheckedUpdateInput>
  }

  /**
   * BankSchema delete
   */
  export type BankSchemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSchema
     */
    select?: BankSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankSchema
     */
    omit?: BankSchemaOmit<ExtArgs> | null
    /**
     * Filter which BankSchema to delete.
     */
    where: BankSchemaWhereUniqueInput
  }

  /**
   * BankSchema deleteMany
   */
  export type BankSchemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankSchemas to delete
     */
    where?: BankSchemaWhereInput
    /**
     * Limit how many BankSchemas to delete.
     */
    limit?: number
  }

  /**
   * BankSchema without action
   */
  export type BankSchemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankSchema
     */
    select?: BankSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankSchema
     */
    omit?: BankSchemaOmit<ExtArgs> | null
  }


  /**
   * Model WalletSchema
   */

  export type AggregateWalletSchema = {
    _count: WalletSchemaCountAggregateOutputType | null
    _avg: WalletSchemaAvgAggregateOutputType | null
    _sum: WalletSchemaSumAggregateOutputType | null
    _min: WalletSchemaMinAggregateOutputType | null
    _max: WalletSchemaMaxAggregateOutputType | null
  }

  export type WalletSchemaAvgAggregateOutputType = {
    walletid: number | null
  }

  export type WalletSchemaSumAggregateOutputType = {
    walletid: number | null
  }

  export type WalletSchemaMinAggregateOutputType = {
    walletid: number | null
    name: string | null
    email: string | null
    role: string | null
    accountnumber: string | null
    amount: string | null
    uniqueid: string | null
  }

  export type WalletSchemaMaxAggregateOutputType = {
    walletid: number | null
    name: string | null
    email: string | null
    role: string | null
    accountnumber: string | null
    amount: string | null
    uniqueid: string | null
  }

  export type WalletSchemaCountAggregateOutputType = {
    walletid: number
    name: number
    email: number
    role: number
    accountnumber: number
    amount: number
    uniqueid: number
    _all: number
  }


  export type WalletSchemaAvgAggregateInputType = {
    walletid?: true
  }

  export type WalletSchemaSumAggregateInputType = {
    walletid?: true
  }

  export type WalletSchemaMinAggregateInputType = {
    walletid?: true
    name?: true
    email?: true
    role?: true
    accountnumber?: true
    amount?: true
    uniqueid?: true
  }

  export type WalletSchemaMaxAggregateInputType = {
    walletid?: true
    name?: true
    email?: true
    role?: true
    accountnumber?: true
    amount?: true
    uniqueid?: true
  }

  export type WalletSchemaCountAggregateInputType = {
    walletid?: true
    name?: true
    email?: true
    role?: true
    accountnumber?: true
    amount?: true
    uniqueid?: true
    _all?: true
  }

  export type WalletSchemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletSchema to aggregate.
     */
    where?: WalletSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletSchemas to fetch.
     */
    orderBy?: WalletSchemaOrderByWithRelationInput | WalletSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WalletSchemas
    **/
    _count?: true | WalletSchemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletSchemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletSchemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletSchemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletSchemaMaxAggregateInputType
  }

  export type GetWalletSchemaAggregateType<T extends WalletSchemaAggregateArgs> = {
        [P in keyof T & keyof AggregateWalletSchema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWalletSchema[P]>
      : GetScalarType<T[P], AggregateWalletSchema[P]>
  }




  export type WalletSchemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletSchemaWhereInput
    orderBy?: WalletSchemaOrderByWithAggregationInput | WalletSchemaOrderByWithAggregationInput[]
    by: WalletSchemaScalarFieldEnum[] | WalletSchemaScalarFieldEnum
    having?: WalletSchemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletSchemaCountAggregateInputType | true
    _avg?: WalletSchemaAvgAggregateInputType
    _sum?: WalletSchemaSumAggregateInputType
    _min?: WalletSchemaMinAggregateInputType
    _max?: WalletSchemaMaxAggregateInputType
  }

  export type WalletSchemaGroupByOutputType = {
    walletid: number
    name: string
    email: string
    role: string
    accountnumber: string
    amount: string
    uniqueid: string
    _count: WalletSchemaCountAggregateOutputType | null
    _avg: WalletSchemaAvgAggregateOutputType | null
    _sum: WalletSchemaSumAggregateOutputType | null
    _min: WalletSchemaMinAggregateOutputType | null
    _max: WalletSchemaMaxAggregateOutputType | null
  }

  type GetWalletSchemaGroupByPayload<T extends WalletSchemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletSchemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletSchemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletSchemaGroupByOutputType[P]>
            : GetScalarType<T[P], WalletSchemaGroupByOutputType[P]>
        }
      >
    >


  export type WalletSchemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    walletid?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    accountnumber?: boolean
    amount?: boolean
    uniqueid?: boolean
  }, ExtArgs["result"]["walletSchema"]>

  export type WalletSchemaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    walletid?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    accountnumber?: boolean
    amount?: boolean
    uniqueid?: boolean
  }, ExtArgs["result"]["walletSchema"]>

  export type WalletSchemaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    walletid?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    accountnumber?: boolean
    amount?: boolean
    uniqueid?: boolean
  }, ExtArgs["result"]["walletSchema"]>

  export type WalletSchemaSelectScalar = {
    walletid?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    accountnumber?: boolean
    amount?: boolean
    uniqueid?: boolean
  }

  export type WalletSchemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"walletid" | "name" | "email" | "role" | "accountnumber" | "amount" | "uniqueid", ExtArgs["result"]["walletSchema"]>

  export type $WalletSchemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WalletSchema"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      walletid: number
      name: string
      email: string
      role: string
      accountnumber: string
      amount: string
      uniqueid: string
    }, ExtArgs["result"]["walletSchema"]>
    composites: {}
  }

  type WalletSchemaGetPayload<S extends boolean | null | undefined | WalletSchemaDefaultArgs> = $Result.GetResult<Prisma.$WalletSchemaPayload, S>

  type WalletSchemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletSchemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletSchemaCountAggregateInputType | true
    }

  export interface WalletSchemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WalletSchema'], meta: { name: 'WalletSchema' } }
    /**
     * Find zero or one WalletSchema that matches the filter.
     * @param {WalletSchemaFindUniqueArgs} args - Arguments to find a WalletSchema
     * @example
     * // Get one WalletSchema
     * const walletSchema = await prisma.walletSchema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletSchemaFindUniqueArgs>(args: SelectSubset<T, WalletSchemaFindUniqueArgs<ExtArgs>>): Prisma__WalletSchemaClient<$Result.GetResult<Prisma.$WalletSchemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WalletSchema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletSchemaFindUniqueOrThrowArgs} args - Arguments to find a WalletSchema
     * @example
     * // Get one WalletSchema
     * const walletSchema = await prisma.walletSchema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletSchemaFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletSchemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletSchemaClient<$Result.GetResult<Prisma.$WalletSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalletSchema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletSchemaFindFirstArgs} args - Arguments to find a WalletSchema
     * @example
     * // Get one WalletSchema
     * const walletSchema = await prisma.walletSchema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletSchemaFindFirstArgs>(args?: SelectSubset<T, WalletSchemaFindFirstArgs<ExtArgs>>): Prisma__WalletSchemaClient<$Result.GetResult<Prisma.$WalletSchemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalletSchema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletSchemaFindFirstOrThrowArgs} args - Arguments to find a WalletSchema
     * @example
     * // Get one WalletSchema
     * const walletSchema = await prisma.walletSchema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletSchemaFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletSchemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletSchemaClient<$Result.GetResult<Prisma.$WalletSchemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WalletSchemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletSchemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WalletSchemas
     * const walletSchemas = await prisma.walletSchema.findMany()
     * 
     * // Get first 10 WalletSchemas
     * const walletSchemas = await prisma.walletSchema.findMany({ take: 10 })
     * 
     * // Only select the `walletid`
     * const walletSchemaWithWalletidOnly = await prisma.walletSchema.findMany({ select: { walletid: true } })
     * 
     */
    findMany<T extends WalletSchemaFindManyArgs>(args?: SelectSubset<T, WalletSchemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletSchemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WalletSchema.
     * @param {WalletSchemaCreateArgs} args - Arguments to create a WalletSchema.
     * @example
     * // Create one WalletSchema
     * const WalletSchema = await prisma.walletSchema.create({
     *   data: {
     *     // ... data to create a WalletSchema
     *   }
     * })
     * 
     */
    create<T extends WalletSchemaCreateArgs>(args: SelectSubset<T, WalletSchemaCreateArgs<ExtArgs>>): Prisma__WalletSchemaClient<$Result.GetResult<Prisma.$WalletSchemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WalletSchemas.
     * @param {WalletSchemaCreateManyArgs} args - Arguments to create many WalletSchemas.
     * @example
     * // Create many WalletSchemas
     * const walletSchema = await prisma.walletSchema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletSchemaCreateManyArgs>(args?: SelectSubset<T, WalletSchemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WalletSchemas and returns the data saved in the database.
     * @param {WalletSchemaCreateManyAndReturnArgs} args - Arguments to create many WalletSchemas.
     * @example
     * // Create many WalletSchemas
     * const walletSchema = await prisma.walletSchema.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WalletSchemas and only return the `walletid`
     * const walletSchemaWithWalletidOnly = await prisma.walletSchema.createManyAndReturn({
     *   select: { walletid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletSchemaCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletSchemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletSchemaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WalletSchema.
     * @param {WalletSchemaDeleteArgs} args - Arguments to delete one WalletSchema.
     * @example
     * // Delete one WalletSchema
     * const WalletSchema = await prisma.walletSchema.delete({
     *   where: {
     *     // ... filter to delete one WalletSchema
     *   }
     * })
     * 
     */
    delete<T extends WalletSchemaDeleteArgs>(args: SelectSubset<T, WalletSchemaDeleteArgs<ExtArgs>>): Prisma__WalletSchemaClient<$Result.GetResult<Prisma.$WalletSchemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WalletSchema.
     * @param {WalletSchemaUpdateArgs} args - Arguments to update one WalletSchema.
     * @example
     * // Update one WalletSchema
     * const walletSchema = await prisma.walletSchema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletSchemaUpdateArgs>(args: SelectSubset<T, WalletSchemaUpdateArgs<ExtArgs>>): Prisma__WalletSchemaClient<$Result.GetResult<Prisma.$WalletSchemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WalletSchemas.
     * @param {WalletSchemaDeleteManyArgs} args - Arguments to filter WalletSchemas to delete.
     * @example
     * // Delete a few WalletSchemas
     * const { count } = await prisma.walletSchema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletSchemaDeleteManyArgs>(args?: SelectSubset<T, WalletSchemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletSchemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WalletSchemas
     * const walletSchema = await prisma.walletSchema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletSchemaUpdateManyArgs>(args: SelectSubset<T, WalletSchemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletSchemas and returns the data updated in the database.
     * @param {WalletSchemaUpdateManyAndReturnArgs} args - Arguments to update many WalletSchemas.
     * @example
     * // Update many WalletSchemas
     * const walletSchema = await prisma.walletSchema.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WalletSchemas and only return the `walletid`
     * const walletSchemaWithWalletidOnly = await prisma.walletSchema.updateManyAndReturn({
     *   select: { walletid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WalletSchemaUpdateManyAndReturnArgs>(args: SelectSubset<T, WalletSchemaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletSchemaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WalletSchema.
     * @param {WalletSchemaUpsertArgs} args - Arguments to update or create a WalletSchema.
     * @example
     * // Update or create a WalletSchema
     * const walletSchema = await prisma.walletSchema.upsert({
     *   create: {
     *     // ... data to create a WalletSchema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WalletSchema we want to update
     *   }
     * })
     */
    upsert<T extends WalletSchemaUpsertArgs>(args: SelectSubset<T, WalletSchemaUpsertArgs<ExtArgs>>): Prisma__WalletSchemaClient<$Result.GetResult<Prisma.$WalletSchemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WalletSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletSchemaCountArgs} args - Arguments to filter WalletSchemas to count.
     * @example
     * // Count the number of WalletSchemas
     * const count = await prisma.walletSchema.count({
     *   where: {
     *     // ... the filter for the WalletSchemas we want to count
     *   }
     * })
    **/
    count<T extends WalletSchemaCountArgs>(
      args?: Subset<T, WalletSchemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletSchemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WalletSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletSchemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WalletSchemaAggregateArgs>(args: Subset<T, WalletSchemaAggregateArgs>): Prisma.PrismaPromise<GetWalletSchemaAggregateType<T>>

    /**
     * Group by WalletSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletSchemaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WalletSchemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletSchemaGroupByArgs['orderBy'] }
        : { orderBy?: WalletSchemaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WalletSchemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletSchemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WalletSchema model
   */
  readonly fields: WalletSchemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WalletSchema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletSchemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WalletSchema model
   */ 
  interface WalletSchemaFieldRefs {
    readonly walletid: FieldRef<"WalletSchema", 'Int'>
    readonly name: FieldRef<"WalletSchema", 'String'>
    readonly email: FieldRef<"WalletSchema", 'String'>
    readonly role: FieldRef<"WalletSchema", 'String'>
    readonly accountnumber: FieldRef<"WalletSchema", 'String'>
    readonly amount: FieldRef<"WalletSchema", 'String'>
    readonly uniqueid: FieldRef<"WalletSchema", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WalletSchema findUnique
   */
  export type WalletSchemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSchema
     */
    select?: WalletSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletSchema
     */
    omit?: WalletSchemaOmit<ExtArgs> | null
    /**
     * Filter, which WalletSchema to fetch.
     */
    where: WalletSchemaWhereUniqueInput
  }

  /**
   * WalletSchema findUniqueOrThrow
   */
  export type WalletSchemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSchema
     */
    select?: WalletSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletSchema
     */
    omit?: WalletSchemaOmit<ExtArgs> | null
    /**
     * Filter, which WalletSchema to fetch.
     */
    where: WalletSchemaWhereUniqueInput
  }

  /**
   * WalletSchema findFirst
   */
  export type WalletSchemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSchema
     */
    select?: WalletSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletSchema
     */
    omit?: WalletSchemaOmit<ExtArgs> | null
    /**
     * Filter, which WalletSchema to fetch.
     */
    where?: WalletSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletSchemas to fetch.
     */
    orderBy?: WalletSchemaOrderByWithRelationInput | WalletSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletSchemas.
     */
    cursor?: WalletSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletSchemas.
     */
    distinct?: WalletSchemaScalarFieldEnum | WalletSchemaScalarFieldEnum[]
  }

  /**
   * WalletSchema findFirstOrThrow
   */
  export type WalletSchemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSchema
     */
    select?: WalletSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletSchema
     */
    omit?: WalletSchemaOmit<ExtArgs> | null
    /**
     * Filter, which WalletSchema to fetch.
     */
    where?: WalletSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletSchemas to fetch.
     */
    orderBy?: WalletSchemaOrderByWithRelationInput | WalletSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletSchemas.
     */
    cursor?: WalletSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletSchemas.
     */
    distinct?: WalletSchemaScalarFieldEnum | WalletSchemaScalarFieldEnum[]
  }

  /**
   * WalletSchema findMany
   */
  export type WalletSchemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSchema
     */
    select?: WalletSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletSchema
     */
    omit?: WalletSchemaOmit<ExtArgs> | null
    /**
     * Filter, which WalletSchemas to fetch.
     */
    where?: WalletSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletSchemas to fetch.
     */
    orderBy?: WalletSchemaOrderByWithRelationInput | WalletSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WalletSchemas.
     */
    cursor?: WalletSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletSchemas.
     */
    skip?: number
    distinct?: WalletSchemaScalarFieldEnum | WalletSchemaScalarFieldEnum[]
  }

  /**
   * WalletSchema create
   */
  export type WalletSchemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSchema
     */
    select?: WalletSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletSchema
     */
    omit?: WalletSchemaOmit<ExtArgs> | null
    /**
     * The data needed to create a WalletSchema.
     */
    data: XOR<WalletSchemaCreateInput, WalletSchemaUncheckedCreateInput>
  }

  /**
   * WalletSchema createMany
   */
  export type WalletSchemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WalletSchemas.
     */
    data: WalletSchemaCreateManyInput | WalletSchemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalletSchema createManyAndReturn
   */
  export type WalletSchemaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSchema
     */
    select?: WalletSchemaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalletSchema
     */
    omit?: WalletSchemaOmit<ExtArgs> | null
    /**
     * The data used to create many WalletSchemas.
     */
    data: WalletSchemaCreateManyInput | WalletSchemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalletSchema update
   */
  export type WalletSchemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSchema
     */
    select?: WalletSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletSchema
     */
    omit?: WalletSchemaOmit<ExtArgs> | null
    /**
     * The data needed to update a WalletSchema.
     */
    data: XOR<WalletSchemaUpdateInput, WalletSchemaUncheckedUpdateInput>
    /**
     * Choose, which WalletSchema to update.
     */
    where: WalletSchemaWhereUniqueInput
  }

  /**
   * WalletSchema updateMany
   */
  export type WalletSchemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WalletSchemas.
     */
    data: XOR<WalletSchemaUpdateManyMutationInput, WalletSchemaUncheckedUpdateManyInput>
    /**
     * Filter which WalletSchemas to update
     */
    where?: WalletSchemaWhereInput
    /**
     * Limit how many WalletSchemas to update.
     */
    limit?: number
  }

  /**
   * WalletSchema updateManyAndReturn
   */
  export type WalletSchemaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSchema
     */
    select?: WalletSchemaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalletSchema
     */
    omit?: WalletSchemaOmit<ExtArgs> | null
    /**
     * The data used to update WalletSchemas.
     */
    data: XOR<WalletSchemaUpdateManyMutationInput, WalletSchemaUncheckedUpdateManyInput>
    /**
     * Filter which WalletSchemas to update
     */
    where?: WalletSchemaWhereInput
    /**
     * Limit how many WalletSchemas to update.
     */
    limit?: number
  }

  /**
   * WalletSchema upsert
   */
  export type WalletSchemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSchema
     */
    select?: WalletSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletSchema
     */
    omit?: WalletSchemaOmit<ExtArgs> | null
    /**
     * The filter to search for the WalletSchema to update in case it exists.
     */
    where: WalletSchemaWhereUniqueInput
    /**
     * In case the WalletSchema found by the `where` argument doesn't exist, create a new WalletSchema with this data.
     */
    create: XOR<WalletSchemaCreateInput, WalletSchemaUncheckedCreateInput>
    /**
     * In case the WalletSchema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletSchemaUpdateInput, WalletSchemaUncheckedUpdateInput>
  }

  /**
   * WalletSchema delete
   */
  export type WalletSchemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSchema
     */
    select?: WalletSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletSchema
     */
    omit?: WalletSchemaOmit<ExtArgs> | null
    /**
     * Filter which WalletSchema to delete.
     */
    where: WalletSchemaWhereUniqueInput
  }

  /**
   * WalletSchema deleteMany
   */
  export type WalletSchemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletSchemas to delete
     */
    where?: WalletSchemaWhereInput
    /**
     * Limit how many WalletSchemas to delete.
     */
    limit?: number
  }

  /**
   * WalletSchema without action
   */
  export type WalletSchemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSchema
     */
    select?: WalletSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletSchema
     */
    omit?: WalletSchemaOmit<ExtArgs> | null
  }


  /**
   * Model CompletedPoject
   */

  export type AggregateCompletedPoject = {
    _count: CompletedPojectCountAggregateOutputType | null
    _avg: CompletedPojectAvgAggregateOutputType | null
    _sum: CompletedPojectSumAggregateOutputType | null
    _min: CompletedPojectMinAggregateOutputType | null
    _max: CompletedPojectMaxAggregateOutputType | null
  }

  export type CompletedPojectAvgAggregateOutputType = {
    completedprojectid: number | null
    client_id: number | null
    userid: number | null
  }

  export type CompletedPojectSumAggregateOutputType = {
    completedprojectid: number | null
    client_id: number | null
    userid: number | null
  }

  export type CompletedPojectMinAggregateOutputType = {
    completedprojectid: number | null
    client_id: number | null
    userid: number | null
    project_title: string | null
    budget: string | null
    timeline: string | null
  }

  export type CompletedPojectMaxAggregateOutputType = {
    completedprojectid: number | null
    client_id: number | null
    userid: number | null
    project_title: string | null
    budget: string | null
    timeline: string | null
  }

  export type CompletedPojectCountAggregateOutputType = {
    completedprojectid: number
    client_id: number
    userid: number
    project_title: number
    budget: number
    timeline: number
    _all: number
  }


  export type CompletedPojectAvgAggregateInputType = {
    completedprojectid?: true
    client_id?: true
    userid?: true
  }

  export type CompletedPojectSumAggregateInputType = {
    completedprojectid?: true
    client_id?: true
    userid?: true
  }

  export type CompletedPojectMinAggregateInputType = {
    completedprojectid?: true
    client_id?: true
    userid?: true
    project_title?: true
    budget?: true
    timeline?: true
  }

  export type CompletedPojectMaxAggregateInputType = {
    completedprojectid?: true
    client_id?: true
    userid?: true
    project_title?: true
    budget?: true
    timeline?: true
  }

  export type CompletedPojectCountAggregateInputType = {
    completedprojectid?: true
    client_id?: true
    userid?: true
    project_title?: true
    budget?: true
    timeline?: true
    _all?: true
  }

  export type CompletedPojectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedPoject to aggregate.
     */
    where?: CompletedPojectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedPojects to fetch.
     */
    orderBy?: CompletedPojectOrderByWithRelationInput | CompletedPojectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompletedPojectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedPojects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedPojects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompletedPojects
    **/
    _count?: true | CompletedPojectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompletedPojectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompletedPojectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompletedPojectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompletedPojectMaxAggregateInputType
  }

  export type GetCompletedPojectAggregateType<T extends CompletedPojectAggregateArgs> = {
        [P in keyof T & keyof AggregateCompletedPoject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompletedPoject[P]>
      : GetScalarType<T[P], AggregateCompletedPoject[P]>
  }




  export type CompletedPojectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedPojectWhereInput
    orderBy?: CompletedPojectOrderByWithAggregationInput | CompletedPojectOrderByWithAggregationInput[]
    by: CompletedPojectScalarFieldEnum[] | CompletedPojectScalarFieldEnum
    having?: CompletedPojectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompletedPojectCountAggregateInputType | true
    _avg?: CompletedPojectAvgAggregateInputType
    _sum?: CompletedPojectSumAggregateInputType
    _min?: CompletedPojectMinAggregateInputType
    _max?: CompletedPojectMaxAggregateInputType
  }

  export type CompletedPojectGroupByOutputType = {
    completedprojectid: number
    client_id: number
    userid: number
    project_title: string
    budget: string
    timeline: string
    _count: CompletedPojectCountAggregateOutputType | null
    _avg: CompletedPojectAvgAggregateOutputType | null
    _sum: CompletedPojectSumAggregateOutputType | null
    _min: CompletedPojectMinAggregateOutputType | null
    _max: CompletedPojectMaxAggregateOutputType | null
  }

  type GetCompletedPojectGroupByPayload<T extends CompletedPojectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompletedPojectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompletedPojectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompletedPojectGroupByOutputType[P]>
            : GetScalarType<T[P], CompletedPojectGroupByOutputType[P]>
        }
      >
    >


  export type CompletedPojectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    completedprojectid?: boolean
    client_id?: boolean
    userid?: boolean
    project_title?: boolean
    budget?: boolean
    timeline?: boolean
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedPoject"]>

  export type CompletedPojectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    completedprojectid?: boolean
    client_id?: boolean
    userid?: boolean
    project_title?: boolean
    budget?: boolean
    timeline?: boolean
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedPoject"]>

  export type CompletedPojectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    completedprojectid?: boolean
    client_id?: boolean
    userid?: boolean
    project_title?: boolean
    budget?: boolean
    timeline?: boolean
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedPoject"]>

  export type CompletedPojectSelectScalar = {
    completedprojectid?: boolean
    client_id?: boolean
    userid?: boolean
    project_title?: boolean
    budget?: boolean
    timeline?: boolean
  }

  export type CompletedPojectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"completedprojectid" | "client_id" | "userid" | "project_title" | "budget" | "timeline", ExtArgs["result"]["completedPoject"]>
  export type CompletedPojectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
  }
  export type CompletedPojectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
  }
  export type CompletedPojectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientSchemaDefaultArgs<ExtArgs>
    user?: boolean | UserSchemaDefaultArgs<ExtArgs>
  }

  export type $CompletedPojectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompletedPoject"
    objects: {
      client: Prisma.$ClientSchemaPayload<ExtArgs>
      user: Prisma.$UserSchemaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      completedprojectid: number
      client_id: number
      userid: number
      project_title: string
      budget: string
      timeline: string
    }, ExtArgs["result"]["completedPoject"]>
    composites: {}
  }

  type CompletedPojectGetPayload<S extends boolean | null | undefined | CompletedPojectDefaultArgs> = $Result.GetResult<Prisma.$CompletedPojectPayload, S>

  type CompletedPojectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompletedPojectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompletedPojectCountAggregateInputType | true
    }

  export interface CompletedPojectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompletedPoject'], meta: { name: 'CompletedPoject' } }
    /**
     * Find zero or one CompletedPoject that matches the filter.
     * @param {CompletedPojectFindUniqueArgs} args - Arguments to find a CompletedPoject
     * @example
     * // Get one CompletedPoject
     * const completedPoject = await prisma.completedPoject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompletedPojectFindUniqueArgs>(args: SelectSubset<T, CompletedPojectFindUniqueArgs<ExtArgs>>): Prisma__CompletedPojectClient<$Result.GetResult<Prisma.$CompletedPojectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompletedPoject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompletedPojectFindUniqueOrThrowArgs} args - Arguments to find a CompletedPoject
     * @example
     * // Get one CompletedPoject
     * const completedPoject = await prisma.completedPoject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompletedPojectFindUniqueOrThrowArgs>(args: SelectSubset<T, CompletedPojectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompletedPojectClient<$Result.GetResult<Prisma.$CompletedPojectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedPoject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedPojectFindFirstArgs} args - Arguments to find a CompletedPoject
     * @example
     * // Get one CompletedPoject
     * const completedPoject = await prisma.completedPoject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompletedPojectFindFirstArgs>(args?: SelectSubset<T, CompletedPojectFindFirstArgs<ExtArgs>>): Prisma__CompletedPojectClient<$Result.GetResult<Prisma.$CompletedPojectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedPoject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedPojectFindFirstOrThrowArgs} args - Arguments to find a CompletedPoject
     * @example
     * // Get one CompletedPoject
     * const completedPoject = await prisma.completedPoject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompletedPojectFindFirstOrThrowArgs>(args?: SelectSubset<T, CompletedPojectFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompletedPojectClient<$Result.GetResult<Prisma.$CompletedPojectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompletedPojects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedPojectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompletedPojects
     * const completedPojects = await prisma.completedPoject.findMany()
     * 
     * // Get first 10 CompletedPojects
     * const completedPojects = await prisma.completedPoject.findMany({ take: 10 })
     * 
     * // Only select the `completedprojectid`
     * const completedPojectWithCompletedprojectidOnly = await prisma.completedPoject.findMany({ select: { completedprojectid: true } })
     * 
     */
    findMany<T extends CompletedPojectFindManyArgs>(args?: SelectSubset<T, CompletedPojectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedPojectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompletedPoject.
     * @param {CompletedPojectCreateArgs} args - Arguments to create a CompletedPoject.
     * @example
     * // Create one CompletedPoject
     * const CompletedPoject = await prisma.completedPoject.create({
     *   data: {
     *     // ... data to create a CompletedPoject
     *   }
     * })
     * 
     */
    create<T extends CompletedPojectCreateArgs>(args: SelectSubset<T, CompletedPojectCreateArgs<ExtArgs>>): Prisma__CompletedPojectClient<$Result.GetResult<Prisma.$CompletedPojectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompletedPojects.
     * @param {CompletedPojectCreateManyArgs} args - Arguments to create many CompletedPojects.
     * @example
     * // Create many CompletedPojects
     * const completedPoject = await prisma.completedPoject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompletedPojectCreateManyArgs>(args?: SelectSubset<T, CompletedPojectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompletedPojects and returns the data saved in the database.
     * @param {CompletedPojectCreateManyAndReturnArgs} args - Arguments to create many CompletedPojects.
     * @example
     * // Create many CompletedPojects
     * const completedPoject = await prisma.completedPoject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompletedPojects and only return the `completedprojectid`
     * const completedPojectWithCompletedprojectidOnly = await prisma.completedPoject.createManyAndReturn({
     *   select: { completedprojectid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompletedPojectCreateManyAndReturnArgs>(args?: SelectSubset<T, CompletedPojectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedPojectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompletedPoject.
     * @param {CompletedPojectDeleteArgs} args - Arguments to delete one CompletedPoject.
     * @example
     * // Delete one CompletedPoject
     * const CompletedPoject = await prisma.completedPoject.delete({
     *   where: {
     *     // ... filter to delete one CompletedPoject
     *   }
     * })
     * 
     */
    delete<T extends CompletedPojectDeleteArgs>(args: SelectSubset<T, CompletedPojectDeleteArgs<ExtArgs>>): Prisma__CompletedPojectClient<$Result.GetResult<Prisma.$CompletedPojectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompletedPoject.
     * @param {CompletedPojectUpdateArgs} args - Arguments to update one CompletedPoject.
     * @example
     * // Update one CompletedPoject
     * const completedPoject = await prisma.completedPoject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompletedPojectUpdateArgs>(args: SelectSubset<T, CompletedPojectUpdateArgs<ExtArgs>>): Prisma__CompletedPojectClient<$Result.GetResult<Prisma.$CompletedPojectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompletedPojects.
     * @param {CompletedPojectDeleteManyArgs} args - Arguments to filter CompletedPojects to delete.
     * @example
     * // Delete a few CompletedPojects
     * const { count } = await prisma.completedPoject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompletedPojectDeleteManyArgs>(args?: SelectSubset<T, CompletedPojectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedPojects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedPojectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompletedPojects
     * const completedPoject = await prisma.completedPoject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompletedPojectUpdateManyArgs>(args: SelectSubset<T, CompletedPojectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedPojects and returns the data updated in the database.
     * @param {CompletedPojectUpdateManyAndReturnArgs} args - Arguments to update many CompletedPojects.
     * @example
     * // Update many CompletedPojects
     * const completedPoject = await prisma.completedPoject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompletedPojects and only return the `completedprojectid`
     * const completedPojectWithCompletedprojectidOnly = await prisma.completedPoject.updateManyAndReturn({
     *   select: { completedprojectid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompletedPojectUpdateManyAndReturnArgs>(args: SelectSubset<T, CompletedPojectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedPojectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompletedPoject.
     * @param {CompletedPojectUpsertArgs} args - Arguments to update or create a CompletedPoject.
     * @example
     * // Update or create a CompletedPoject
     * const completedPoject = await prisma.completedPoject.upsert({
     *   create: {
     *     // ... data to create a CompletedPoject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompletedPoject we want to update
     *   }
     * })
     */
    upsert<T extends CompletedPojectUpsertArgs>(args: SelectSubset<T, CompletedPojectUpsertArgs<ExtArgs>>): Prisma__CompletedPojectClient<$Result.GetResult<Prisma.$CompletedPojectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompletedPojects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedPojectCountArgs} args - Arguments to filter CompletedPojects to count.
     * @example
     * // Count the number of CompletedPojects
     * const count = await prisma.completedPoject.count({
     *   where: {
     *     // ... the filter for the CompletedPojects we want to count
     *   }
     * })
    **/
    count<T extends CompletedPojectCountArgs>(
      args?: Subset<T, CompletedPojectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompletedPojectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompletedPoject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedPojectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompletedPojectAggregateArgs>(args: Subset<T, CompletedPojectAggregateArgs>): Prisma.PrismaPromise<GetCompletedPojectAggregateType<T>>

    /**
     * Group by CompletedPoject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedPojectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompletedPojectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompletedPojectGroupByArgs['orderBy'] }
        : { orderBy?: CompletedPojectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompletedPojectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompletedPojectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompletedPoject model
   */
  readonly fields: CompletedPojectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompletedPoject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompletedPojectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientSchemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientSchemaDefaultArgs<ExtArgs>>): Prisma__ClientSchemaClient<$Result.GetResult<Prisma.$ClientSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserSchemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserSchemaDefaultArgs<ExtArgs>>): Prisma__UserSchemaClient<$Result.GetResult<Prisma.$UserSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompletedPoject model
   */ 
  interface CompletedPojectFieldRefs {
    readonly completedprojectid: FieldRef<"CompletedPoject", 'Int'>
    readonly client_id: FieldRef<"CompletedPoject", 'Int'>
    readonly userid: FieldRef<"CompletedPoject", 'Int'>
    readonly project_title: FieldRef<"CompletedPoject", 'String'>
    readonly budget: FieldRef<"CompletedPoject", 'String'>
    readonly timeline: FieldRef<"CompletedPoject", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CompletedPoject findUnique
   */
  export type CompletedPojectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedPoject
     */
    select?: CompletedPojectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedPoject
     */
    omit?: CompletedPojectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedPojectInclude<ExtArgs> | null
    /**
     * Filter, which CompletedPoject to fetch.
     */
    where: CompletedPojectWhereUniqueInput
  }

  /**
   * CompletedPoject findUniqueOrThrow
   */
  export type CompletedPojectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedPoject
     */
    select?: CompletedPojectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedPoject
     */
    omit?: CompletedPojectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedPojectInclude<ExtArgs> | null
    /**
     * Filter, which CompletedPoject to fetch.
     */
    where: CompletedPojectWhereUniqueInput
  }

  /**
   * CompletedPoject findFirst
   */
  export type CompletedPojectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedPoject
     */
    select?: CompletedPojectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedPoject
     */
    omit?: CompletedPojectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedPojectInclude<ExtArgs> | null
    /**
     * Filter, which CompletedPoject to fetch.
     */
    where?: CompletedPojectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedPojects to fetch.
     */
    orderBy?: CompletedPojectOrderByWithRelationInput | CompletedPojectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedPojects.
     */
    cursor?: CompletedPojectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedPojects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedPojects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedPojects.
     */
    distinct?: CompletedPojectScalarFieldEnum | CompletedPojectScalarFieldEnum[]
  }

  /**
   * CompletedPoject findFirstOrThrow
   */
  export type CompletedPojectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedPoject
     */
    select?: CompletedPojectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedPoject
     */
    omit?: CompletedPojectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedPojectInclude<ExtArgs> | null
    /**
     * Filter, which CompletedPoject to fetch.
     */
    where?: CompletedPojectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedPojects to fetch.
     */
    orderBy?: CompletedPojectOrderByWithRelationInput | CompletedPojectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedPojects.
     */
    cursor?: CompletedPojectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedPojects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedPojects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedPojects.
     */
    distinct?: CompletedPojectScalarFieldEnum | CompletedPojectScalarFieldEnum[]
  }

  /**
   * CompletedPoject findMany
   */
  export type CompletedPojectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedPoject
     */
    select?: CompletedPojectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedPoject
     */
    omit?: CompletedPojectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedPojectInclude<ExtArgs> | null
    /**
     * Filter, which CompletedPojects to fetch.
     */
    where?: CompletedPojectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedPojects to fetch.
     */
    orderBy?: CompletedPojectOrderByWithRelationInput | CompletedPojectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompletedPojects.
     */
    cursor?: CompletedPojectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedPojects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedPojects.
     */
    skip?: number
    distinct?: CompletedPojectScalarFieldEnum | CompletedPojectScalarFieldEnum[]
  }

  /**
   * CompletedPoject create
   */
  export type CompletedPojectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedPoject
     */
    select?: CompletedPojectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedPoject
     */
    omit?: CompletedPojectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedPojectInclude<ExtArgs> | null
    /**
     * The data needed to create a CompletedPoject.
     */
    data: XOR<CompletedPojectCreateInput, CompletedPojectUncheckedCreateInput>
  }

  /**
   * CompletedPoject createMany
   */
  export type CompletedPojectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompletedPojects.
     */
    data: CompletedPojectCreateManyInput | CompletedPojectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompletedPoject createManyAndReturn
   */
  export type CompletedPojectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedPoject
     */
    select?: CompletedPojectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedPoject
     */
    omit?: CompletedPojectOmit<ExtArgs> | null
    /**
     * The data used to create many CompletedPojects.
     */
    data: CompletedPojectCreateManyInput | CompletedPojectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedPojectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedPoject update
   */
  export type CompletedPojectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedPoject
     */
    select?: CompletedPojectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedPoject
     */
    omit?: CompletedPojectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedPojectInclude<ExtArgs> | null
    /**
     * The data needed to update a CompletedPoject.
     */
    data: XOR<CompletedPojectUpdateInput, CompletedPojectUncheckedUpdateInput>
    /**
     * Choose, which CompletedPoject to update.
     */
    where: CompletedPojectWhereUniqueInput
  }

  /**
   * CompletedPoject updateMany
   */
  export type CompletedPojectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompletedPojects.
     */
    data: XOR<CompletedPojectUpdateManyMutationInput, CompletedPojectUncheckedUpdateManyInput>
    /**
     * Filter which CompletedPojects to update
     */
    where?: CompletedPojectWhereInput
    /**
     * Limit how many CompletedPojects to update.
     */
    limit?: number
  }

  /**
   * CompletedPoject updateManyAndReturn
   */
  export type CompletedPojectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedPoject
     */
    select?: CompletedPojectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedPoject
     */
    omit?: CompletedPojectOmit<ExtArgs> | null
    /**
     * The data used to update CompletedPojects.
     */
    data: XOR<CompletedPojectUpdateManyMutationInput, CompletedPojectUncheckedUpdateManyInput>
    /**
     * Filter which CompletedPojects to update
     */
    where?: CompletedPojectWhereInput
    /**
     * Limit how many CompletedPojects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedPojectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedPoject upsert
   */
  export type CompletedPojectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedPoject
     */
    select?: CompletedPojectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedPoject
     */
    omit?: CompletedPojectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedPojectInclude<ExtArgs> | null
    /**
     * The filter to search for the CompletedPoject to update in case it exists.
     */
    where: CompletedPojectWhereUniqueInput
    /**
     * In case the CompletedPoject found by the `where` argument doesn't exist, create a new CompletedPoject with this data.
     */
    create: XOR<CompletedPojectCreateInput, CompletedPojectUncheckedCreateInput>
    /**
     * In case the CompletedPoject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompletedPojectUpdateInput, CompletedPojectUncheckedUpdateInput>
  }

  /**
   * CompletedPoject delete
   */
  export type CompletedPojectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedPoject
     */
    select?: CompletedPojectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedPoject
     */
    omit?: CompletedPojectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedPojectInclude<ExtArgs> | null
    /**
     * Filter which CompletedPoject to delete.
     */
    where: CompletedPojectWhereUniqueInput
  }

  /**
   * CompletedPoject deleteMany
   */
  export type CompletedPojectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedPojects to delete
     */
    where?: CompletedPojectWhereInput
    /**
     * Limit how many CompletedPojects to delete.
     */
    limit?: number
  }

  /**
   * CompletedPoject without action
   */
  export type CompletedPojectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedPoject
     */
    select?: CompletedPojectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedPoject
     */
    omit?: CompletedPojectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedPojectInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserSchemaScalarFieldEnum: {
    user_id: 'user_id',
    Name: 'Name',
    Email: 'Email',
    Password: 'Password',
    Experience: 'Experience',
    Rating: 'Rating',
    Skills: 'Skills'
  };

  export type UserSchemaScalarFieldEnum = (typeof UserSchemaScalarFieldEnum)[keyof typeof UserSchemaScalarFieldEnum]


  export const ClientSchemaScalarFieldEnum: {
    client_id: 'client_id',
    client_name: 'client_name',
    Email: 'Email',
    Password: 'Password',
    Organization: 'Organization'
  };

  export type ClientSchemaScalarFieldEnum = (typeof ClientSchemaScalarFieldEnum)[keyof typeof ClientSchemaScalarFieldEnum]


  export const ProfileSchemaScalarFieldEnum: {
    profile_id: 'profile_id',
    About: 'About',
    ProjectLink: 'ProjectLink',
    userid: 'userid'
  };

  export type ProfileSchemaScalarFieldEnum = (typeof ProfileSchemaScalarFieldEnum)[keyof typeof ProfileSchemaScalarFieldEnum]


  export const JobSchemaScalarFieldEnum: {
    job_id: 'job_id',
    clientid: 'clientid',
    Job_titile: 'Job_titile',
    Job_description: 'Job_description',
    Budget: 'Budget',
    Timeline: 'Timeline'
  };

  export type JobSchemaScalarFieldEnum = (typeof JobSchemaScalarFieldEnum)[keyof typeof JobSchemaScalarFieldEnum]


  export const ApplyJobScalarFieldEnum: {
    applyjobid: 'applyjobid',
    clientid: 'clientid',
    userid: 'userid',
    jobtitle: 'jobtitle',
    budget: 'budget',
    timeline: 'timeline',
    jobid: 'jobid'
  };

  export type ApplyJobScalarFieldEnum = (typeof ApplyJobScalarFieldEnum)[keyof typeof ApplyJobScalarFieldEnum]


  export const AcceptedProjectScalarFieldEnum: {
    aaplyproject: 'aaplyproject',
    client_id: 'client_id',
    userid: 'userid',
    project_title: 'project_title',
    budget: 'budget',
    timeline: 'timeline'
  };

  export type AcceptedProjectScalarFieldEnum = (typeof AcceptedProjectScalarFieldEnum)[keyof typeof AcceptedProjectScalarFieldEnum]


  export const BankSchemaScalarFieldEnum: {
    accountid: 'accountid',
    email: 'email',
    accountnumber: 'accountnumber',
    amount: 'amount'
  };

  export type BankSchemaScalarFieldEnum = (typeof BankSchemaScalarFieldEnum)[keyof typeof BankSchemaScalarFieldEnum]


  export const WalletSchemaScalarFieldEnum: {
    walletid: 'walletid',
    name: 'name',
    email: 'email',
    role: 'role',
    accountnumber: 'accountnumber',
    amount: 'amount',
    uniqueid: 'uniqueid'
  };

  export type WalletSchemaScalarFieldEnum = (typeof WalletSchemaScalarFieldEnum)[keyof typeof WalletSchemaScalarFieldEnum]


  export const CompletedPojectScalarFieldEnum: {
    completedprojectid: 'completedprojectid',
    client_id: 'client_id',
    userid: 'userid',
    project_title: 'project_title',
    budget: 'budget',
    timeline: 'timeline'
  };

  export type CompletedPojectScalarFieldEnum = (typeof CompletedPojectScalarFieldEnum)[keyof typeof CompletedPojectScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserSchemaWhereInput = {
    AND?: UserSchemaWhereInput | UserSchemaWhereInput[]
    OR?: UserSchemaWhereInput[]
    NOT?: UserSchemaWhereInput | UserSchemaWhereInput[]
    user_id?: IntFilter<"UserSchema"> | number
    Name?: StringFilter<"UserSchema"> | string
    Email?: StringFilter<"UserSchema"> | string
    Password?: StringFilter<"UserSchema"> | string
    Experience?: IntFilter<"UserSchema"> | number
    Rating?: IntFilter<"UserSchema"> | number
    Skills?: StringNullableListFilter<"UserSchema">
    Profile?: XOR<ProfileSchemaNullableScalarRelationFilter, ProfileSchemaWhereInput> | null
    ApplyJob?: ApplyJobListRelationFilter
    AcceptedProject?: AcceptedProjectListRelationFilter
    CompletedPoject?: CompletedPojectListRelationFilter
  }

  export type UserSchemaOrderByWithRelationInput = {
    user_id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Experience?: SortOrder
    Rating?: SortOrder
    Skills?: SortOrder
    Profile?: ProfileSchemaOrderByWithRelationInput
    ApplyJob?: ApplyJobOrderByRelationAggregateInput
    AcceptedProject?: AcceptedProjectOrderByRelationAggregateInput
    CompletedPoject?: CompletedPojectOrderByRelationAggregateInput
  }

  export type UserSchemaWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    Email?: string
    AND?: UserSchemaWhereInput | UserSchemaWhereInput[]
    OR?: UserSchemaWhereInput[]
    NOT?: UserSchemaWhereInput | UserSchemaWhereInput[]
    Name?: StringFilter<"UserSchema"> | string
    Password?: StringFilter<"UserSchema"> | string
    Experience?: IntFilter<"UserSchema"> | number
    Rating?: IntFilter<"UserSchema"> | number
    Skills?: StringNullableListFilter<"UserSchema">
    Profile?: XOR<ProfileSchemaNullableScalarRelationFilter, ProfileSchemaWhereInput> | null
    ApplyJob?: ApplyJobListRelationFilter
    AcceptedProject?: AcceptedProjectListRelationFilter
    CompletedPoject?: CompletedPojectListRelationFilter
  }, "user_id" | "Email">

  export type UserSchemaOrderByWithAggregationInput = {
    user_id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Experience?: SortOrder
    Rating?: SortOrder
    Skills?: SortOrder
    _count?: UserSchemaCountOrderByAggregateInput
    _avg?: UserSchemaAvgOrderByAggregateInput
    _max?: UserSchemaMaxOrderByAggregateInput
    _min?: UserSchemaMinOrderByAggregateInput
    _sum?: UserSchemaSumOrderByAggregateInput
  }

  export type UserSchemaScalarWhereWithAggregatesInput = {
    AND?: UserSchemaScalarWhereWithAggregatesInput | UserSchemaScalarWhereWithAggregatesInput[]
    OR?: UserSchemaScalarWhereWithAggregatesInput[]
    NOT?: UserSchemaScalarWhereWithAggregatesInput | UserSchemaScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"UserSchema"> | number
    Name?: StringWithAggregatesFilter<"UserSchema"> | string
    Email?: StringWithAggregatesFilter<"UserSchema"> | string
    Password?: StringWithAggregatesFilter<"UserSchema"> | string
    Experience?: IntWithAggregatesFilter<"UserSchema"> | number
    Rating?: IntWithAggregatesFilter<"UserSchema"> | number
    Skills?: StringNullableListFilter<"UserSchema">
  }

  export type ClientSchemaWhereInput = {
    AND?: ClientSchemaWhereInput | ClientSchemaWhereInput[]
    OR?: ClientSchemaWhereInput[]
    NOT?: ClientSchemaWhereInput | ClientSchemaWhereInput[]
    client_id?: IntFilter<"ClientSchema"> | number
    client_name?: StringFilter<"ClientSchema"> | string
    Email?: StringFilter<"ClientSchema"> | string
    Password?: StringFilter<"ClientSchema"> | string
    Organization?: StringNullableFilter<"ClientSchema"> | string | null
    jobschema?: JobSchemaListRelationFilter
    ApplyJobs?: ApplyJobListRelationFilter
    AcceptedProject?: AcceptedProjectListRelationFilter
    CompletedPoject?: CompletedPojectListRelationFilter
  }

  export type ClientSchemaOrderByWithRelationInput = {
    client_id?: SortOrder
    client_name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Organization?: SortOrderInput | SortOrder
    jobschema?: JobSchemaOrderByRelationAggregateInput
    ApplyJobs?: ApplyJobOrderByRelationAggregateInput
    AcceptedProject?: AcceptedProjectOrderByRelationAggregateInput
    CompletedPoject?: CompletedPojectOrderByRelationAggregateInput
  }

  export type ClientSchemaWhereUniqueInput = Prisma.AtLeast<{
    client_id?: number
    Email?: string
    AND?: ClientSchemaWhereInput | ClientSchemaWhereInput[]
    OR?: ClientSchemaWhereInput[]
    NOT?: ClientSchemaWhereInput | ClientSchemaWhereInput[]
    client_name?: StringFilter<"ClientSchema"> | string
    Password?: StringFilter<"ClientSchema"> | string
    Organization?: StringNullableFilter<"ClientSchema"> | string | null
    jobschema?: JobSchemaListRelationFilter
    ApplyJobs?: ApplyJobListRelationFilter
    AcceptedProject?: AcceptedProjectListRelationFilter
    CompletedPoject?: CompletedPojectListRelationFilter
  }, "client_id" | "Email">

  export type ClientSchemaOrderByWithAggregationInput = {
    client_id?: SortOrder
    client_name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Organization?: SortOrderInput | SortOrder
    _count?: ClientSchemaCountOrderByAggregateInput
    _avg?: ClientSchemaAvgOrderByAggregateInput
    _max?: ClientSchemaMaxOrderByAggregateInput
    _min?: ClientSchemaMinOrderByAggregateInput
    _sum?: ClientSchemaSumOrderByAggregateInput
  }

  export type ClientSchemaScalarWhereWithAggregatesInput = {
    AND?: ClientSchemaScalarWhereWithAggregatesInput | ClientSchemaScalarWhereWithAggregatesInput[]
    OR?: ClientSchemaScalarWhereWithAggregatesInput[]
    NOT?: ClientSchemaScalarWhereWithAggregatesInput | ClientSchemaScalarWhereWithAggregatesInput[]
    client_id?: IntWithAggregatesFilter<"ClientSchema"> | number
    client_name?: StringWithAggregatesFilter<"ClientSchema"> | string
    Email?: StringWithAggregatesFilter<"ClientSchema"> | string
    Password?: StringWithAggregatesFilter<"ClientSchema"> | string
    Organization?: StringNullableWithAggregatesFilter<"ClientSchema"> | string | null
  }

  export type ProfileSchemaWhereInput = {
    AND?: ProfileSchemaWhereInput | ProfileSchemaWhereInput[]
    OR?: ProfileSchemaWhereInput[]
    NOT?: ProfileSchemaWhereInput | ProfileSchemaWhereInput[]
    profile_id?: IntFilter<"ProfileSchema"> | number
    About?: StringFilter<"ProfileSchema"> | string
    ProjectLink?: StringNullableListFilter<"ProfileSchema">
    userid?: IntFilter<"ProfileSchema"> | number
    user?: XOR<UserSchemaScalarRelationFilter, UserSchemaWhereInput>
    applyJobs?: ApplyJobListRelationFilter
  }

  export type ProfileSchemaOrderByWithRelationInput = {
    profile_id?: SortOrder
    About?: SortOrder
    ProjectLink?: SortOrder
    userid?: SortOrder
    user?: UserSchemaOrderByWithRelationInput
    applyJobs?: ApplyJobOrderByRelationAggregateInput
  }

  export type ProfileSchemaWhereUniqueInput = Prisma.AtLeast<{
    profile_id?: number
    userid?: number
    AND?: ProfileSchemaWhereInput | ProfileSchemaWhereInput[]
    OR?: ProfileSchemaWhereInput[]
    NOT?: ProfileSchemaWhereInput | ProfileSchemaWhereInput[]
    About?: StringFilter<"ProfileSchema"> | string
    ProjectLink?: StringNullableListFilter<"ProfileSchema">
    user?: XOR<UserSchemaScalarRelationFilter, UserSchemaWhereInput>
    applyJobs?: ApplyJobListRelationFilter
  }, "profile_id" | "userid">

  export type ProfileSchemaOrderByWithAggregationInput = {
    profile_id?: SortOrder
    About?: SortOrder
    ProjectLink?: SortOrder
    userid?: SortOrder
    _count?: ProfileSchemaCountOrderByAggregateInput
    _avg?: ProfileSchemaAvgOrderByAggregateInput
    _max?: ProfileSchemaMaxOrderByAggregateInput
    _min?: ProfileSchemaMinOrderByAggregateInput
    _sum?: ProfileSchemaSumOrderByAggregateInput
  }

  export type ProfileSchemaScalarWhereWithAggregatesInput = {
    AND?: ProfileSchemaScalarWhereWithAggregatesInput | ProfileSchemaScalarWhereWithAggregatesInput[]
    OR?: ProfileSchemaScalarWhereWithAggregatesInput[]
    NOT?: ProfileSchemaScalarWhereWithAggregatesInput | ProfileSchemaScalarWhereWithAggregatesInput[]
    profile_id?: IntWithAggregatesFilter<"ProfileSchema"> | number
    About?: StringWithAggregatesFilter<"ProfileSchema"> | string
    ProjectLink?: StringNullableListFilter<"ProfileSchema">
    userid?: IntWithAggregatesFilter<"ProfileSchema"> | number
  }

  export type JobSchemaWhereInput = {
    AND?: JobSchemaWhereInput | JobSchemaWhereInput[]
    OR?: JobSchemaWhereInput[]
    NOT?: JobSchemaWhereInput | JobSchemaWhereInput[]
    job_id?: IntFilter<"JobSchema"> | number
    clientid?: IntFilter<"JobSchema"> | number
    Job_titile?: StringFilter<"JobSchema"> | string
    Job_description?: StringFilter<"JobSchema"> | string
    Budget?: StringFilter<"JobSchema"> | string
    Timeline?: StringFilter<"JobSchema"> | string
    client?: XOR<ClientSchemaScalarRelationFilter, ClientSchemaWhereInput>
    applyJob?: ApplyJobListRelationFilter
  }

  export type JobSchemaOrderByWithRelationInput = {
    job_id?: SortOrder
    clientid?: SortOrder
    Job_titile?: SortOrder
    Job_description?: SortOrder
    Budget?: SortOrder
    Timeline?: SortOrder
    client?: ClientSchemaOrderByWithRelationInput
    applyJob?: ApplyJobOrderByRelationAggregateInput
  }

  export type JobSchemaWhereUniqueInput = Prisma.AtLeast<{
    job_id?: number
    AND?: JobSchemaWhereInput | JobSchemaWhereInput[]
    OR?: JobSchemaWhereInput[]
    NOT?: JobSchemaWhereInput | JobSchemaWhereInput[]
    clientid?: IntFilter<"JobSchema"> | number
    Job_titile?: StringFilter<"JobSchema"> | string
    Job_description?: StringFilter<"JobSchema"> | string
    Budget?: StringFilter<"JobSchema"> | string
    Timeline?: StringFilter<"JobSchema"> | string
    client?: XOR<ClientSchemaScalarRelationFilter, ClientSchemaWhereInput>
    applyJob?: ApplyJobListRelationFilter
  }, "job_id">

  export type JobSchemaOrderByWithAggregationInput = {
    job_id?: SortOrder
    clientid?: SortOrder
    Job_titile?: SortOrder
    Job_description?: SortOrder
    Budget?: SortOrder
    Timeline?: SortOrder
    _count?: JobSchemaCountOrderByAggregateInput
    _avg?: JobSchemaAvgOrderByAggregateInput
    _max?: JobSchemaMaxOrderByAggregateInput
    _min?: JobSchemaMinOrderByAggregateInput
    _sum?: JobSchemaSumOrderByAggregateInput
  }

  export type JobSchemaScalarWhereWithAggregatesInput = {
    AND?: JobSchemaScalarWhereWithAggregatesInput | JobSchemaScalarWhereWithAggregatesInput[]
    OR?: JobSchemaScalarWhereWithAggregatesInput[]
    NOT?: JobSchemaScalarWhereWithAggregatesInput | JobSchemaScalarWhereWithAggregatesInput[]
    job_id?: IntWithAggregatesFilter<"JobSchema"> | number
    clientid?: IntWithAggregatesFilter<"JobSchema"> | number
    Job_titile?: StringWithAggregatesFilter<"JobSchema"> | string
    Job_description?: StringWithAggregatesFilter<"JobSchema"> | string
    Budget?: StringWithAggregatesFilter<"JobSchema"> | string
    Timeline?: StringWithAggregatesFilter<"JobSchema"> | string
  }

  export type ApplyJobWhereInput = {
    AND?: ApplyJobWhereInput | ApplyJobWhereInput[]
    OR?: ApplyJobWhereInput[]
    NOT?: ApplyJobWhereInput | ApplyJobWhereInput[]
    applyjobid?: IntFilter<"ApplyJob"> | number
    clientid?: IntFilter<"ApplyJob"> | number
    userid?: IntFilter<"ApplyJob"> | number
    jobtitle?: StringFilter<"ApplyJob"> | string
    budget?: StringFilter<"ApplyJob"> | string
    timeline?: StringFilter<"ApplyJob"> | string
    jobid?: IntFilter<"ApplyJob"> | number
    user?: XOR<UserSchemaScalarRelationFilter, UserSchemaWhereInput>
    client?: XOR<ClientSchemaScalarRelationFilter, ClientSchemaWhereInput>
    profile?: XOR<ProfileSchemaScalarRelationFilter, ProfileSchemaWhereInput>
    jobschema?: XOR<JobSchemaScalarRelationFilter, JobSchemaWhereInput>
  }

  export type ApplyJobOrderByWithRelationInput = {
    applyjobid?: SortOrder
    clientid?: SortOrder
    userid?: SortOrder
    jobtitle?: SortOrder
    budget?: SortOrder
    timeline?: SortOrder
    jobid?: SortOrder
    user?: UserSchemaOrderByWithRelationInput
    client?: ClientSchemaOrderByWithRelationInput
    profile?: ProfileSchemaOrderByWithRelationInput
    jobschema?: JobSchemaOrderByWithRelationInput
  }

  export type ApplyJobWhereUniqueInput = Prisma.AtLeast<{
    applyjobid?: number
    clientid_userid_jobtitle?: ApplyJobClientidUseridJobtitleCompoundUniqueInput
    AND?: ApplyJobWhereInput | ApplyJobWhereInput[]
    OR?: ApplyJobWhereInput[]
    NOT?: ApplyJobWhereInput | ApplyJobWhereInput[]
    clientid?: IntFilter<"ApplyJob"> | number
    userid?: IntFilter<"ApplyJob"> | number
    jobtitle?: StringFilter<"ApplyJob"> | string
    budget?: StringFilter<"ApplyJob"> | string
    timeline?: StringFilter<"ApplyJob"> | string
    jobid?: IntFilter<"ApplyJob"> | number
    user?: XOR<UserSchemaScalarRelationFilter, UserSchemaWhereInput>
    client?: XOR<ClientSchemaScalarRelationFilter, ClientSchemaWhereInput>
    profile?: XOR<ProfileSchemaScalarRelationFilter, ProfileSchemaWhereInput>
    jobschema?: XOR<JobSchemaScalarRelationFilter, JobSchemaWhereInput>
  }, "applyjobid" | "clientid_userid_jobtitle">

  export type ApplyJobOrderByWithAggregationInput = {
    applyjobid?: SortOrder
    clientid?: SortOrder
    userid?: SortOrder
    jobtitle?: SortOrder
    budget?: SortOrder
    timeline?: SortOrder
    jobid?: SortOrder
    _count?: ApplyJobCountOrderByAggregateInput
    _avg?: ApplyJobAvgOrderByAggregateInput
    _max?: ApplyJobMaxOrderByAggregateInput
    _min?: ApplyJobMinOrderByAggregateInput
    _sum?: ApplyJobSumOrderByAggregateInput
  }

  export type ApplyJobScalarWhereWithAggregatesInput = {
    AND?: ApplyJobScalarWhereWithAggregatesInput | ApplyJobScalarWhereWithAggregatesInput[]
    OR?: ApplyJobScalarWhereWithAggregatesInput[]
    NOT?: ApplyJobScalarWhereWithAggregatesInput | ApplyJobScalarWhereWithAggregatesInput[]
    applyjobid?: IntWithAggregatesFilter<"ApplyJob"> | number
    clientid?: IntWithAggregatesFilter<"ApplyJob"> | number
    userid?: IntWithAggregatesFilter<"ApplyJob"> | number
    jobtitle?: StringWithAggregatesFilter<"ApplyJob"> | string
    budget?: StringWithAggregatesFilter<"ApplyJob"> | string
    timeline?: StringWithAggregatesFilter<"ApplyJob"> | string
    jobid?: IntWithAggregatesFilter<"ApplyJob"> | number
  }

  export type AcceptedProjectWhereInput = {
    AND?: AcceptedProjectWhereInput | AcceptedProjectWhereInput[]
    OR?: AcceptedProjectWhereInput[]
    NOT?: AcceptedProjectWhereInput | AcceptedProjectWhereInput[]
    aaplyproject?: IntFilter<"AcceptedProject"> | number
    client_id?: IntFilter<"AcceptedProject"> | number
    userid?: IntFilter<"AcceptedProject"> | number
    project_title?: StringFilter<"AcceptedProject"> | string
    budget?: StringFilter<"AcceptedProject"> | string
    timeline?: StringFilter<"AcceptedProject"> | string
    client?: XOR<ClientSchemaScalarRelationFilter, ClientSchemaWhereInput>
    user?: XOR<UserSchemaScalarRelationFilter, UserSchemaWhereInput>
  }

  export type AcceptedProjectOrderByWithRelationInput = {
    aaplyproject?: SortOrder
    client_id?: SortOrder
    userid?: SortOrder
    project_title?: SortOrder
    budget?: SortOrder
    timeline?: SortOrder
    client?: ClientSchemaOrderByWithRelationInput
    user?: UserSchemaOrderByWithRelationInput
  }

  export type AcceptedProjectWhereUniqueInput = Prisma.AtLeast<{
    aaplyproject?: number
    client_id_userid_project_title?: AcceptedProjectClient_idUseridProject_titleCompoundUniqueInput
    AND?: AcceptedProjectWhereInput | AcceptedProjectWhereInput[]
    OR?: AcceptedProjectWhereInput[]
    NOT?: AcceptedProjectWhereInput | AcceptedProjectWhereInput[]
    client_id?: IntFilter<"AcceptedProject"> | number
    userid?: IntFilter<"AcceptedProject"> | number
    project_title?: StringFilter<"AcceptedProject"> | string
    budget?: StringFilter<"AcceptedProject"> | string
    timeline?: StringFilter<"AcceptedProject"> | string
    client?: XOR<ClientSchemaScalarRelationFilter, ClientSchemaWhereInput>
    user?: XOR<UserSchemaScalarRelationFilter, UserSchemaWhereInput>
  }, "aaplyproject" | "client_id_userid_project_title">

  export type AcceptedProjectOrderByWithAggregationInput = {
    aaplyproject?: SortOrder
    client_id?: SortOrder
    userid?: SortOrder
    project_title?: SortOrder
    budget?: SortOrder
    timeline?: SortOrder
    _count?: AcceptedProjectCountOrderByAggregateInput
    _avg?: AcceptedProjectAvgOrderByAggregateInput
    _max?: AcceptedProjectMaxOrderByAggregateInput
    _min?: AcceptedProjectMinOrderByAggregateInput
    _sum?: AcceptedProjectSumOrderByAggregateInput
  }

  export type AcceptedProjectScalarWhereWithAggregatesInput = {
    AND?: AcceptedProjectScalarWhereWithAggregatesInput | AcceptedProjectScalarWhereWithAggregatesInput[]
    OR?: AcceptedProjectScalarWhereWithAggregatesInput[]
    NOT?: AcceptedProjectScalarWhereWithAggregatesInput | AcceptedProjectScalarWhereWithAggregatesInput[]
    aaplyproject?: IntWithAggregatesFilter<"AcceptedProject"> | number
    client_id?: IntWithAggregatesFilter<"AcceptedProject"> | number
    userid?: IntWithAggregatesFilter<"AcceptedProject"> | number
    project_title?: StringWithAggregatesFilter<"AcceptedProject"> | string
    budget?: StringWithAggregatesFilter<"AcceptedProject"> | string
    timeline?: StringWithAggregatesFilter<"AcceptedProject"> | string
  }

  export type BankSchemaWhereInput = {
    AND?: BankSchemaWhereInput | BankSchemaWhereInput[]
    OR?: BankSchemaWhereInput[]
    NOT?: BankSchemaWhereInput | BankSchemaWhereInput[]
    accountid?: IntFilter<"BankSchema"> | number
    email?: StringFilter<"BankSchema"> | string
    accountnumber?: StringFilter<"BankSchema"> | string
    amount?: StringFilter<"BankSchema"> | string
  }

  export type BankSchemaOrderByWithRelationInput = {
    accountid?: SortOrder
    email?: SortOrder
    accountnumber?: SortOrder
    amount?: SortOrder
  }

  export type BankSchemaWhereUniqueInput = Prisma.AtLeast<{
    accountid?: number
    accountnumber?: string
    AND?: BankSchemaWhereInput | BankSchemaWhereInput[]
    OR?: BankSchemaWhereInput[]
    NOT?: BankSchemaWhereInput | BankSchemaWhereInput[]
    email?: StringFilter<"BankSchema"> | string
    amount?: StringFilter<"BankSchema"> | string
  }, "accountid" | "accountnumber">

  export type BankSchemaOrderByWithAggregationInput = {
    accountid?: SortOrder
    email?: SortOrder
    accountnumber?: SortOrder
    amount?: SortOrder
    _count?: BankSchemaCountOrderByAggregateInput
    _avg?: BankSchemaAvgOrderByAggregateInput
    _max?: BankSchemaMaxOrderByAggregateInput
    _min?: BankSchemaMinOrderByAggregateInput
    _sum?: BankSchemaSumOrderByAggregateInput
  }

  export type BankSchemaScalarWhereWithAggregatesInput = {
    AND?: BankSchemaScalarWhereWithAggregatesInput | BankSchemaScalarWhereWithAggregatesInput[]
    OR?: BankSchemaScalarWhereWithAggregatesInput[]
    NOT?: BankSchemaScalarWhereWithAggregatesInput | BankSchemaScalarWhereWithAggregatesInput[]
    accountid?: IntWithAggregatesFilter<"BankSchema"> | number
    email?: StringWithAggregatesFilter<"BankSchema"> | string
    accountnumber?: StringWithAggregatesFilter<"BankSchema"> | string
    amount?: StringWithAggregatesFilter<"BankSchema"> | string
  }

  export type WalletSchemaWhereInput = {
    AND?: WalletSchemaWhereInput | WalletSchemaWhereInput[]
    OR?: WalletSchemaWhereInput[]
    NOT?: WalletSchemaWhereInput | WalletSchemaWhereInput[]
    walletid?: IntFilter<"WalletSchema"> | number
    name?: StringFilter<"WalletSchema"> | string
    email?: StringFilter<"WalletSchema"> | string
    role?: StringFilter<"WalletSchema"> | string
    accountnumber?: StringFilter<"WalletSchema"> | string
    amount?: StringFilter<"WalletSchema"> | string
    uniqueid?: StringFilter<"WalletSchema"> | string
  }

  export type WalletSchemaOrderByWithRelationInput = {
    walletid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    accountnumber?: SortOrder
    amount?: SortOrder
    uniqueid?: SortOrder
  }

  export type WalletSchemaWhereUniqueInput = Prisma.AtLeast<{
    walletid?: number
    email?: string
    accountnumber?: string
    uniqueid?: string
    email_role?: WalletSchemaEmailRoleCompoundUniqueInput
    AND?: WalletSchemaWhereInput | WalletSchemaWhereInput[]
    OR?: WalletSchemaWhereInput[]
    NOT?: WalletSchemaWhereInput | WalletSchemaWhereInput[]
    name?: StringFilter<"WalletSchema"> | string
    role?: StringFilter<"WalletSchema"> | string
    amount?: StringFilter<"WalletSchema"> | string
  }, "walletid" | "email" | "accountnumber" | "uniqueid" | "email_role">

  export type WalletSchemaOrderByWithAggregationInput = {
    walletid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    accountnumber?: SortOrder
    amount?: SortOrder
    uniqueid?: SortOrder
    _count?: WalletSchemaCountOrderByAggregateInput
    _avg?: WalletSchemaAvgOrderByAggregateInput
    _max?: WalletSchemaMaxOrderByAggregateInput
    _min?: WalletSchemaMinOrderByAggregateInput
    _sum?: WalletSchemaSumOrderByAggregateInput
  }

  export type WalletSchemaScalarWhereWithAggregatesInput = {
    AND?: WalletSchemaScalarWhereWithAggregatesInput | WalletSchemaScalarWhereWithAggregatesInput[]
    OR?: WalletSchemaScalarWhereWithAggregatesInput[]
    NOT?: WalletSchemaScalarWhereWithAggregatesInput | WalletSchemaScalarWhereWithAggregatesInput[]
    walletid?: IntWithAggregatesFilter<"WalletSchema"> | number
    name?: StringWithAggregatesFilter<"WalletSchema"> | string
    email?: StringWithAggregatesFilter<"WalletSchema"> | string
    role?: StringWithAggregatesFilter<"WalletSchema"> | string
    accountnumber?: StringWithAggregatesFilter<"WalletSchema"> | string
    amount?: StringWithAggregatesFilter<"WalletSchema"> | string
    uniqueid?: StringWithAggregatesFilter<"WalletSchema"> | string
  }

  export type CompletedPojectWhereInput = {
    AND?: CompletedPojectWhereInput | CompletedPojectWhereInput[]
    OR?: CompletedPojectWhereInput[]
    NOT?: CompletedPojectWhereInput | CompletedPojectWhereInput[]
    completedprojectid?: IntFilter<"CompletedPoject"> | number
    client_id?: IntFilter<"CompletedPoject"> | number
    userid?: IntFilter<"CompletedPoject"> | number
    project_title?: StringFilter<"CompletedPoject"> | string
    budget?: StringFilter<"CompletedPoject"> | string
    timeline?: StringFilter<"CompletedPoject"> | string
    client?: XOR<ClientSchemaScalarRelationFilter, ClientSchemaWhereInput>
    user?: XOR<UserSchemaScalarRelationFilter, UserSchemaWhereInput>
  }

  export type CompletedPojectOrderByWithRelationInput = {
    completedprojectid?: SortOrder
    client_id?: SortOrder
    userid?: SortOrder
    project_title?: SortOrder
    budget?: SortOrder
    timeline?: SortOrder
    client?: ClientSchemaOrderByWithRelationInput
    user?: UserSchemaOrderByWithRelationInput
  }

  export type CompletedPojectWhereUniqueInput = Prisma.AtLeast<{
    completedprojectid?: number
    client_id_userid_project_title?: CompletedPojectClient_idUseridProject_titleCompoundUniqueInput
    AND?: CompletedPojectWhereInput | CompletedPojectWhereInput[]
    OR?: CompletedPojectWhereInput[]
    NOT?: CompletedPojectWhereInput | CompletedPojectWhereInput[]
    client_id?: IntFilter<"CompletedPoject"> | number
    userid?: IntFilter<"CompletedPoject"> | number
    project_title?: StringFilter<"CompletedPoject"> | string
    budget?: StringFilter<"CompletedPoject"> | string
    timeline?: StringFilter<"CompletedPoject"> | string
    client?: XOR<ClientSchemaScalarRelationFilter, ClientSchemaWhereInput>
    user?: XOR<UserSchemaScalarRelationFilter, UserSchemaWhereInput>
  }, "completedprojectid" | "client_id_userid_project_title">

  export type CompletedPojectOrderByWithAggregationInput = {
    completedprojectid?: SortOrder
    client_id?: SortOrder
    userid?: SortOrder
    project_title?: SortOrder
    budget?: SortOrder
    timeline?: SortOrder
    _count?: CompletedPojectCountOrderByAggregateInput
    _avg?: CompletedPojectAvgOrderByAggregateInput
    _max?: CompletedPojectMaxOrderByAggregateInput
    _min?: CompletedPojectMinOrderByAggregateInput
    _sum?: CompletedPojectSumOrderByAggregateInput
  }

  export type CompletedPojectScalarWhereWithAggregatesInput = {
    AND?: CompletedPojectScalarWhereWithAggregatesInput | CompletedPojectScalarWhereWithAggregatesInput[]
    OR?: CompletedPojectScalarWhereWithAggregatesInput[]
    NOT?: CompletedPojectScalarWhereWithAggregatesInput | CompletedPojectScalarWhereWithAggregatesInput[]
    completedprojectid?: IntWithAggregatesFilter<"CompletedPoject"> | number
    client_id?: IntWithAggregatesFilter<"CompletedPoject"> | number
    userid?: IntWithAggregatesFilter<"CompletedPoject"> | number
    project_title?: StringWithAggregatesFilter<"CompletedPoject"> | string
    budget?: StringWithAggregatesFilter<"CompletedPoject"> | string
    timeline?: StringWithAggregatesFilter<"CompletedPoject"> | string
  }

  export type UserSchemaCreateInput = {
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills?: UserSchemaCreateSkillsInput | string[]
    Profile?: ProfileSchemaCreateNestedOneWithoutUserInput
    ApplyJob?: ApplyJobCreateNestedManyWithoutUserInput
    AcceptedProject?: AcceptedProjectCreateNestedManyWithoutUserInput
    CompletedPoject?: CompletedPojectCreateNestedManyWithoutUserInput
  }

  export type UserSchemaUncheckedCreateInput = {
    user_id?: number
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills?: UserSchemaCreateSkillsInput | string[]
    Profile?: ProfileSchemaUncheckedCreateNestedOneWithoutUserInput
    ApplyJob?: ApplyJobUncheckedCreateNestedManyWithoutUserInput
    AcceptedProject?: AcceptedProjectUncheckedCreateNestedManyWithoutUserInput
    CompletedPoject?: CompletedPojectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserSchemaUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
    Profile?: ProfileSchemaUpdateOneWithoutUserNestedInput
    ApplyJob?: ApplyJobUpdateManyWithoutUserNestedInput
    AcceptedProject?: AcceptedProjectUpdateManyWithoutUserNestedInput
    CompletedPoject?: CompletedPojectUpdateManyWithoutUserNestedInput
  }

  export type UserSchemaUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
    Profile?: ProfileSchemaUncheckedUpdateOneWithoutUserNestedInput
    ApplyJob?: ApplyJobUncheckedUpdateManyWithoutUserNestedInput
    AcceptedProject?: AcceptedProjectUncheckedUpdateManyWithoutUserNestedInput
    CompletedPoject?: CompletedPojectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserSchemaCreateManyInput = {
    user_id?: number
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills?: UserSchemaCreateSkillsInput | string[]
  }

  export type UserSchemaUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
  }

  export type UserSchemaUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
  }

  export type ClientSchemaCreateInput = {
    client_name: string
    Email: string
    Password: string
    Organization?: string | null
    jobschema?: JobSchemaCreateNestedManyWithoutClientInput
    ApplyJobs?: ApplyJobCreateNestedManyWithoutClientInput
    AcceptedProject?: AcceptedProjectCreateNestedManyWithoutClientInput
    CompletedPoject?: CompletedPojectCreateNestedManyWithoutClientInput
  }

  export type ClientSchemaUncheckedCreateInput = {
    client_id?: number
    client_name: string
    Email: string
    Password: string
    Organization?: string | null
    jobschema?: JobSchemaUncheckedCreateNestedManyWithoutClientInput
    ApplyJobs?: ApplyJobUncheckedCreateNestedManyWithoutClientInput
    AcceptedProject?: AcceptedProjectUncheckedCreateNestedManyWithoutClientInput
    CompletedPoject?: CompletedPojectUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientSchemaUpdateInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
    jobschema?: JobSchemaUpdateManyWithoutClientNestedInput
    ApplyJobs?: ApplyJobUpdateManyWithoutClientNestedInput
    AcceptedProject?: AcceptedProjectUpdateManyWithoutClientNestedInput
    CompletedPoject?: CompletedPojectUpdateManyWithoutClientNestedInput
  }

  export type ClientSchemaUncheckedUpdateInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
    jobschema?: JobSchemaUncheckedUpdateManyWithoutClientNestedInput
    ApplyJobs?: ApplyJobUncheckedUpdateManyWithoutClientNestedInput
    AcceptedProject?: AcceptedProjectUncheckedUpdateManyWithoutClientNestedInput
    CompletedPoject?: CompletedPojectUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientSchemaCreateManyInput = {
    client_id?: number
    client_name: string
    Email: string
    Password: string
    Organization?: string | null
  }

  export type ClientSchemaUpdateManyMutationInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientSchemaUncheckedUpdateManyInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileSchemaCreateInput = {
    About: string
    ProjectLink?: ProfileSchemaCreateProjectLinkInput | string[]
    user: UserSchemaCreateNestedOneWithoutProfileInput
    applyJobs?: ApplyJobCreateNestedManyWithoutProfileInput
  }

  export type ProfileSchemaUncheckedCreateInput = {
    profile_id?: number
    About: string
    ProjectLink?: ProfileSchemaCreateProjectLinkInput | string[]
    userid: number
    applyJobs?: ApplyJobUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileSchemaUpdateInput = {
    About?: StringFieldUpdateOperationsInput | string
    ProjectLink?: ProfileSchemaUpdateProjectLinkInput | string[]
    user?: UserSchemaUpdateOneRequiredWithoutProfileNestedInput
    applyJobs?: ApplyJobUpdateManyWithoutProfileNestedInput
  }

  export type ProfileSchemaUncheckedUpdateInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    About?: StringFieldUpdateOperationsInput | string
    ProjectLink?: ProfileSchemaUpdateProjectLinkInput | string[]
    userid?: IntFieldUpdateOperationsInput | number
    applyJobs?: ApplyJobUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileSchemaCreateManyInput = {
    profile_id?: number
    About: string
    ProjectLink?: ProfileSchemaCreateProjectLinkInput | string[]
    userid: number
  }

  export type ProfileSchemaUpdateManyMutationInput = {
    About?: StringFieldUpdateOperationsInput | string
    ProjectLink?: ProfileSchemaUpdateProjectLinkInput | string[]
  }

  export type ProfileSchemaUncheckedUpdateManyInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    About?: StringFieldUpdateOperationsInput | string
    ProjectLink?: ProfileSchemaUpdateProjectLinkInput | string[]
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type JobSchemaCreateInput = {
    Job_titile: string
    Job_description: string
    Budget: string
    Timeline: string
    client: ClientSchemaCreateNestedOneWithoutJobschemaInput
    applyJob?: ApplyJobCreateNestedManyWithoutJobschemaInput
  }

  export type JobSchemaUncheckedCreateInput = {
    job_id?: number
    clientid: number
    Job_titile: string
    Job_description: string
    Budget: string
    Timeline: string
    applyJob?: ApplyJobUncheckedCreateNestedManyWithoutJobschemaInput
  }

  export type JobSchemaUpdateInput = {
    Job_titile?: StringFieldUpdateOperationsInput | string
    Job_description?: StringFieldUpdateOperationsInput | string
    Budget?: StringFieldUpdateOperationsInput | string
    Timeline?: StringFieldUpdateOperationsInput | string
    client?: ClientSchemaUpdateOneRequiredWithoutJobschemaNestedInput
    applyJob?: ApplyJobUpdateManyWithoutJobschemaNestedInput
  }

  export type JobSchemaUncheckedUpdateInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    Job_titile?: StringFieldUpdateOperationsInput | string
    Job_description?: StringFieldUpdateOperationsInput | string
    Budget?: StringFieldUpdateOperationsInput | string
    Timeline?: StringFieldUpdateOperationsInput | string
    applyJob?: ApplyJobUncheckedUpdateManyWithoutJobschemaNestedInput
  }

  export type JobSchemaCreateManyInput = {
    job_id?: number
    clientid: number
    Job_titile: string
    Job_description: string
    Budget: string
    Timeline: string
  }

  export type JobSchemaUpdateManyMutationInput = {
    Job_titile?: StringFieldUpdateOperationsInput | string
    Job_description?: StringFieldUpdateOperationsInput | string
    Budget?: StringFieldUpdateOperationsInput | string
    Timeline?: StringFieldUpdateOperationsInput | string
  }

  export type JobSchemaUncheckedUpdateManyInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    Job_titile?: StringFieldUpdateOperationsInput | string
    Job_description?: StringFieldUpdateOperationsInput | string
    Budget?: StringFieldUpdateOperationsInput | string
    Timeline?: StringFieldUpdateOperationsInput | string
  }

  export type ApplyJobCreateInput = {
    jobtitle: string
    budget?: string
    timeline?: string
    user: UserSchemaCreateNestedOneWithoutApplyJobInput
    client: ClientSchemaCreateNestedOneWithoutApplyJobsInput
    profile: ProfileSchemaCreateNestedOneWithoutApplyJobsInput
    jobschema?: JobSchemaCreateNestedOneWithoutApplyJobInput
  }

  export type ApplyJobUncheckedCreateInput = {
    applyjobid?: number
    clientid: number
    userid: number
    jobtitle: string
    budget?: string
    timeline?: string
    jobid?: number
  }

  export type ApplyJobUpdateInput = {
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    user?: UserSchemaUpdateOneRequiredWithoutApplyJobNestedInput
    client?: ClientSchemaUpdateOneRequiredWithoutApplyJobsNestedInput
    profile?: ProfileSchemaUpdateOneRequiredWithoutApplyJobsNestedInput
    jobschema?: JobSchemaUpdateOneRequiredWithoutApplyJobNestedInput
  }

  export type ApplyJobUncheckedUpdateInput = {
    applyjobid?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    jobid?: IntFieldUpdateOperationsInput | number
  }

  export type ApplyJobCreateManyInput = {
    applyjobid?: number
    clientid: number
    userid: number
    jobtitle: string
    budget?: string
    timeline?: string
    jobid?: number
  }

  export type ApplyJobUpdateManyMutationInput = {
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type ApplyJobUncheckedUpdateManyInput = {
    applyjobid?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    jobid?: IntFieldUpdateOperationsInput | number
  }

  export type AcceptedProjectCreateInput = {
    project_title: string
    budget: string
    timeline: string
    client: ClientSchemaCreateNestedOneWithoutAcceptedProjectInput
    user: UserSchemaCreateNestedOneWithoutAcceptedProjectInput
  }

  export type AcceptedProjectUncheckedCreateInput = {
    aaplyproject?: number
    client_id: number
    userid: number
    project_title: string
    budget: string
    timeline: string
  }

  export type AcceptedProjectUpdateInput = {
    project_title?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    client?: ClientSchemaUpdateOneRequiredWithoutAcceptedProjectNestedInput
    user?: UserSchemaUpdateOneRequiredWithoutAcceptedProjectNestedInput
  }

  export type AcceptedProjectUncheckedUpdateInput = {
    aaplyproject?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    project_title?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type AcceptedProjectCreateManyInput = {
    aaplyproject?: number
    client_id: number
    userid: number
    project_title: string
    budget: string
    timeline: string
  }

  export type AcceptedProjectUpdateManyMutationInput = {
    project_title?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type AcceptedProjectUncheckedUpdateManyInput = {
    aaplyproject?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    project_title?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type BankSchemaCreateInput = {
    email: string
    accountnumber: string
    amount?: string
  }

  export type BankSchemaUncheckedCreateInput = {
    accountid?: number
    email: string
    accountnumber: string
    amount?: string
  }

  export type BankSchemaUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    accountnumber?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
  }

  export type BankSchemaUncheckedUpdateInput = {
    accountid?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    accountnumber?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
  }

  export type BankSchemaCreateManyInput = {
    accountid?: number
    email: string
    accountnumber: string
    amount?: string
  }

  export type BankSchemaUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    accountnumber?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
  }

  export type BankSchemaUncheckedUpdateManyInput = {
    accountid?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    accountnumber?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
  }

  export type WalletSchemaCreateInput = {
    name: string
    email: string
    role: string
    accountnumber: string
    amount?: string
    uniqueid: string
  }

  export type WalletSchemaUncheckedCreateInput = {
    walletid?: number
    name: string
    email: string
    role: string
    accountnumber: string
    amount?: string
    uniqueid: string
  }

  export type WalletSchemaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    accountnumber?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    uniqueid?: StringFieldUpdateOperationsInput | string
  }

  export type WalletSchemaUncheckedUpdateInput = {
    walletid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    accountnumber?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    uniqueid?: StringFieldUpdateOperationsInput | string
  }

  export type WalletSchemaCreateManyInput = {
    walletid?: number
    name: string
    email: string
    role: string
    accountnumber: string
    amount?: string
    uniqueid: string
  }

  export type WalletSchemaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    accountnumber?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    uniqueid?: StringFieldUpdateOperationsInput | string
  }

  export type WalletSchemaUncheckedUpdateManyInput = {
    walletid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    accountnumber?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    uniqueid?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedPojectCreateInput = {
    project_title: string
    budget: string
    timeline: string
    client: ClientSchemaCreateNestedOneWithoutCompletedPojectInput
    user: UserSchemaCreateNestedOneWithoutCompletedPojectInput
  }

  export type CompletedPojectUncheckedCreateInput = {
    completedprojectid?: number
    client_id: number
    userid: number
    project_title: string
    budget: string
    timeline: string
  }

  export type CompletedPojectUpdateInput = {
    project_title?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    client?: ClientSchemaUpdateOneRequiredWithoutCompletedPojectNestedInput
    user?: UserSchemaUpdateOneRequiredWithoutCompletedPojectNestedInput
  }

  export type CompletedPojectUncheckedUpdateInput = {
    completedprojectid?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    project_title?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedPojectCreateManyInput = {
    completedprojectid?: number
    client_id: number
    userid: number
    project_title: string
    budget: string
    timeline: string
  }

  export type CompletedPojectUpdateManyMutationInput = {
    project_title?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedPojectUncheckedUpdateManyInput = {
    completedprojectid?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    project_title?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ProfileSchemaNullableScalarRelationFilter = {
    is?: ProfileSchemaWhereInput | null
    isNot?: ProfileSchemaWhereInput | null
  }

  export type ApplyJobListRelationFilter = {
    every?: ApplyJobWhereInput
    some?: ApplyJobWhereInput
    none?: ApplyJobWhereInput
  }

  export type AcceptedProjectListRelationFilter = {
    every?: AcceptedProjectWhereInput
    some?: AcceptedProjectWhereInput
    none?: AcceptedProjectWhereInput
  }

  export type CompletedPojectListRelationFilter = {
    every?: CompletedPojectWhereInput
    some?: CompletedPojectWhereInput
    none?: CompletedPojectWhereInput
  }

  export type ApplyJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AcceptedProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompletedPojectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSchemaCountOrderByAggregateInput = {
    user_id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Experience?: SortOrder
    Rating?: SortOrder
    Skills?: SortOrder
  }

  export type UserSchemaAvgOrderByAggregateInput = {
    user_id?: SortOrder
    Experience?: SortOrder
    Rating?: SortOrder
  }

  export type UserSchemaMaxOrderByAggregateInput = {
    user_id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Experience?: SortOrder
    Rating?: SortOrder
  }

  export type UserSchemaMinOrderByAggregateInput = {
    user_id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Experience?: SortOrder
    Rating?: SortOrder
  }

  export type UserSchemaSumOrderByAggregateInput = {
    user_id?: SortOrder
    Experience?: SortOrder
    Rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type JobSchemaListRelationFilter = {
    every?: JobSchemaWhereInput
    some?: JobSchemaWhereInput
    none?: JobSchemaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JobSchemaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientSchemaCountOrderByAggregateInput = {
    client_id?: SortOrder
    client_name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Organization?: SortOrder
  }

  export type ClientSchemaAvgOrderByAggregateInput = {
    client_id?: SortOrder
  }

  export type ClientSchemaMaxOrderByAggregateInput = {
    client_id?: SortOrder
    client_name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Organization?: SortOrder
  }

  export type ClientSchemaMinOrderByAggregateInput = {
    client_id?: SortOrder
    client_name?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Organization?: SortOrder
  }

  export type ClientSchemaSumOrderByAggregateInput = {
    client_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserSchemaScalarRelationFilter = {
    is?: UserSchemaWhereInput
    isNot?: UserSchemaWhereInput
  }

  export type ProfileSchemaCountOrderByAggregateInput = {
    profile_id?: SortOrder
    About?: SortOrder
    ProjectLink?: SortOrder
    userid?: SortOrder
  }

  export type ProfileSchemaAvgOrderByAggregateInput = {
    profile_id?: SortOrder
    userid?: SortOrder
  }

  export type ProfileSchemaMaxOrderByAggregateInput = {
    profile_id?: SortOrder
    About?: SortOrder
    userid?: SortOrder
  }

  export type ProfileSchemaMinOrderByAggregateInput = {
    profile_id?: SortOrder
    About?: SortOrder
    userid?: SortOrder
  }

  export type ProfileSchemaSumOrderByAggregateInput = {
    profile_id?: SortOrder
    userid?: SortOrder
  }

  export type ClientSchemaScalarRelationFilter = {
    is?: ClientSchemaWhereInput
    isNot?: ClientSchemaWhereInput
  }

  export type JobSchemaCountOrderByAggregateInput = {
    job_id?: SortOrder
    clientid?: SortOrder
    Job_titile?: SortOrder
    Job_description?: SortOrder
    Budget?: SortOrder
    Timeline?: SortOrder
  }

  export type JobSchemaAvgOrderByAggregateInput = {
    job_id?: SortOrder
    clientid?: SortOrder
  }

  export type JobSchemaMaxOrderByAggregateInput = {
    job_id?: SortOrder
    clientid?: SortOrder
    Job_titile?: SortOrder
    Job_description?: SortOrder
    Budget?: SortOrder
    Timeline?: SortOrder
  }

  export type JobSchemaMinOrderByAggregateInput = {
    job_id?: SortOrder
    clientid?: SortOrder
    Job_titile?: SortOrder
    Job_description?: SortOrder
    Budget?: SortOrder
    Timeline?: SortOrder
  }

  export type JobSchemaSumOrderByAggregateInput = {
    job_id?: SortOrder
    clientid?: SortOrder
  }

  export type ProfileSchemaScalarRelationFilter = {
    is?: ProfileSchemaWhereInput
    isNot?: ProfileSchemaWhereInput
  }

  export type JobSchemaScalarRelationFilter = {
    is?: JobSchemaWhereInput
    isNot?: JobSchemaWhereInput
  }

  export type ApplyJobClientidUseridJobtitleCompoundUniqueInput = {
    clientid: number
    userid: number
    jobtitle: string
  }

  export type ApplyJobCountOrderByAggregateInput = {
    applyjobid?: SortOrder
    clientid?: SortOrder
    userid?: SortOrder
    jobtitle?: SortOrder
    budget?: SortOrder
    timeline?: SortOrder
    jobid?: SortOrder
  }

  export type ApplyJobAvgOrderByAggregateInput = {
    applyjobid?: SortOrder
    clientid?: SortOrder
    userid?: SortOrder
    jobid?: SortOrder
  }

  export type ApplyJobMaxOrderByAggregateInput = {
    applyjobid?: SortOrder
    clientid?: SortOrder
    userid?: SortOrder
    jobtitle?: SortOrder
    budget?: SortOrder
    timeline?: SortOrder
    jobid?: SortOrder
  }

  export type ApplyJobMinOrderByAggregateInput = {
    applyjobid?: SortOrder
    clientid?: SortOrder
    userid?: SortOrder
    jobtitle?: SortOrder
    budget?: SortOrder
    timeline?: SortOrder
    jobid?: SortOrder
  }

  export type ApplyJobSumOrderByAggregateInput = {
    applyjobid?: SortOrder
    clientid?: SortOrder
    userid?: SortOrder
    jobid?: SortOrder
  }

  export type AcceptedProjectClient_idUseridProject_titleCompoundUniqueInput = {
    client_id: number
    userid: number
    project_title: string
  }

  export type AcceptedProjectCountOrderByAggregateInput = {
    aaplyproject?: SortOrder
    client_id?: SortOrder
    userid?: SortOrder
    project_title?: SortOrder
    budget?: SortOrder
    timeline?: SortOrder
  }

  export type AcceptedProjectAvgOrderByAggregateInput = {
    aaplyproject?: SortOrder
    client_id?: SortOrder
    userid?: SortOrder
  }

  export type AcceptedProjectMaxOrderByAggregateInput = {
    aaplyproject?: SortOrder
    client_id?: SortOrder
    userid?: SortOrder
    project_title?: SortOrder
    budget?: SortOrder
    timeline?: SortOrder
  }

  export type AcceptedProjectMinOrderByAggregateInput = {
    aaplyproject?: SortOrder
    client_id?: SortOrder
    userid?: SortOrder
    project_title?: SortOrder
    budget?: SortOrder
    timeline?: SortOrder
  }

  export type AcceptedProjectSumOrderByAggregateInput = {
    aaplyproject?: SortOrder
    client_id?: SortOrder
    userid?: SortOrder
  }

  export type BankSchemaCountOrderByAggregateInput = {
    accountid?: SortOrder
    email?: SortOrder
    accountnumber?: SortOrder
    amount?: SortOrder
  }

  export type BankSchemaAvgOrderByAggregateInput = {
    accountid?: SortOrder
  }

  export type BankSchemaMaxOrderByAggregateInput = {
    accountid?: SortOrder
    email?: SortOrder
    accountnumber?: SortOrder
    amount?: SortOrder
  }

  export type BankSchemaMinOrderByAggregateInput = {
    accountid?: SortOrder
    email?: SortOrder
    accountnumber?: SortOrder
    amount?: SortOrder
  }

  export type BankSchemaSumOrderByAggregateInput = {
    accountid?: SortOrder
  }

  export type WalletSchemaEmailRoleCompoundUniqueInput = {
    email: string
    role: string
  }

  export type WalletSchemaCountOrderByAggregateInput = {
    walletid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    accountnumber?: SortOrder
    amount?: SortOrder
    uniqueid?: SortOrder
  }

  export type WalletSchemaAvgOrderByAggregateInput = {
    walletid?: SortOrder
  }

  export type WalletSchemaMaxOrderByAggregateInput = {
    walletid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    accountnumber?: SortOrder
    amount?: SortOrder
    uniqueid?: SortOrder
  }

  export type WalletSchemaMinOrderByAggregateInput = {
    walletid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    accountnumber?: SortOrder
    amount?: SortOrder
    uniqueid?: SortOrder
  }

  export type WalletSchemaSumOrderByAggregateInput = {
    walletid?: SortOrder
  }

  export type CompletedPojectClient_idUseridProject_titleCompoundUniqueInput = {
    client_id: number
    userid: number
    project_title: string
  }

  export type CompletedPojectCountOrderByAggregateInput = {
    completedprojectid?: SortOrder
    client_id?: SortOrder
    userid?: SortOrder
    project_title?: SortOrder
    budget?: SortOrder
    timeline?: SortOrder
  }

  export type CompletedPojectAvgOrderByAggregateInput = {
    completedprojectid?: SortOrder
    client_id?: SortOrder
    userid?: SortOrder
  }

  export type CompletedPojectMaxOrderByAggregateInput = {
    completedprojectid?: SortOrder
    client_id?: SortOrder
    userid?: SortOrder
    project_title?: SortOrder
    budget?: SortOrder
    timeline?: SortOrder
  }

  export type CompletedPojectMinOrderByAggregateInput = {
    completedprojectid?: SortOrder
    client_id?: SortOrder
    userid?: SortOrder
    project_title?: SortOrder
    budget?: SortOrder
    timeline?: SortOrder
  }

  export type CompletedPojectSumOrderByAggregateInput = {
    completedprojectid?: SortOrder
    client_id?: SortOrder
    userid?: SortOrder
  }

  export type UserSchemaCreateSkillsInput = {
    set: string[]
  }

  export type ProfileSchemaCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileSchemaCreateWithoutUserInput, ProfileSchemaUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileSchemaCreateOrConnectWithoutUserInput
    connect?: ProfileSchemaWhereUniqueInput
  }

  export type ApplyJobCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplyJobCreateWithoutUserInput, ApplyJobUncheckedCreateWithoutUserInput> | ApplyJobCreateWithoutUserInput[] | ApplyJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutUserInput | ApplyJobCreateOrConnectWithoutUserInput[]
    createMany?: ApplyJobCreateManyUserInputEnvelope
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
  }

  export type AcceptedProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<AcceptedProjectCreateWithoutUserInput, AcceptedProjectUncheckedCreateWithoutUserInput> | AcceptedProjectCreateWithoutUserInput[] | AcceptedProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AcceptedProjectCreateOrConnectWithoutUserInput | AcceptedProjectCreateOrConnectWithoutUserInput[]
    createMany?: AcceptedProjectCreateManyUserInputEnvelope
    connect?: AcceptedProjectWhereUniqueInput | AcceptedProjectWhereUniqueInput[]
  }

  export type CompletedPojectCreateNestedManyWithoutUserInput = {
    create?: XOR<CompletedPojectCreateWithoutUserInput, CompletedPojectUncheckedCreateWithoutUserInput> | CompletedPojectCreateWithoutUserInput[] | CompletedPojectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedPojectCreateOrConnectWithoutUserInput | CompletedPojectCreateOrConnectWithoutUserInput[]
    createMany?: CompletedPojectCreateManyUserInputEnvelope
    connect?: CompletedPojectWhereUniqueInput | CompletedPojectWhereUniqueInput[]
  }

  export type ProfileSchemaUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileSchemaCreateWithoutUserInput, ProfileSchemaUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileSchemaCreateOrConnectWithoutUserInput
    connect?: ProfileSchemaWhereUniqueInput
  }

  export type ApplyJobUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplyJobCreateWithoutUserInput, ApplyJobUncheckedCreateWithoutUserInput> | ApplyJobCreateWithoutUserInput[] | ApplyJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutUserInput | ApplyJobCreateOrConnectWithoutUserInput[]
    createMany?: ApplyJobCreateManyUserInputEnvelope
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
  }

  export type AcceptedProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AcceptedProjectCreateWithoutUserInput, AcceptedProjectUncheckedCreateWithoutUserInput> | AcceptedProjectCreateWithoutUserInput[] | AcceptedProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AcceptedProjectCreateOrConnectWithoutUserInput | AcceptedProjectCreateOrConnectWithoutUserInput[]
    createMany?: AcceptedProjectCreateManyUserInputEnvelope
    connect?: AcceptedProjectWhereUniqueInput | AcceptedProjectWhereUniqueInput[]
  }

  export type CompletedPojectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CompletedPojectCreateWithoutUserInput, CompletedPojectUncheckedCreateWithoutUserInput> | CompletedPojectCreateWithoutUserInput[] | CompletedPojectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedPojectCreateOrConnectWithoutUserInput | CompletedPojectCreateOrConnectWithoutUserInput[]
    createMany?: CompletedPojectCreateManyUserInputEnvelope
    connect?: CompletedPojectWhereUniqueInput | CompletedPojectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserSchemaUpdateSkillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProfileSchemaUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileSchemaCreateWithoutUserInput, ProfileSchemaUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileSchemaCreateOrConnectWithoutUserInput
    upsert?: ProfileSchemaUpsertWithoutUserInput
    disconnect?: ProfileSchemaWhereInput | boolean
    delete?: ProfileSchemaWhereInput | boolean
    connect?: ProfileSchemaWhereUniqueInput
    update?: XOR<XOR<ProfileSchemaUpdateToOneWithWhereWithoutUserInput, ProfileSchemaUpdateWithoutUserInput>, ProfileSchemaUncheckedUpdateWithoutUserInput>
  }

  export type ApplyJobUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplyJobCreateWithoutUserInput, ApplyJobUncheckedCreateWithoutUserInput> | ApplyJobCreateWithoutUserInput[] | ApplyJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutUserInput | ApplyJobCreateOrConnectWithoutUserInput[]
    upsert?: ApplyJobUpsertWithWhereUniqueWithoutUserInput | ApplyJobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplyJobCreateManyUserInputEnvelope
    set?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    disconnect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    delete?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    update?: ApplyJobUpdateWithWhereUniqueWithoutUserInput | ApplyJobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplyJobUpdateManyWithWhereWithoutUserInput | ApplyJobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplyJobScalarWhereInput | ApplyJobScalarWhereInput[]
  }

  export type AcceptedProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<AcceptedProjectCreateWithoutUserInput, AcceptedProjectUncheckedCreateWithoutUserInput> | AcceptedProjectCreateWithoutUserInput[] | AcceptedProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AcceptedProjectCreateOrConnectWithoutUserInput | AcceptedProjectCreateOrConnectWithoutUserInput[]
    upsert?: AcceptedProjectUpsertWithWhereUniqueWithoutUserInput | AcceptedProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AcceptedProjectCreateManyUserInputEnvelope
    set?: AcceptedProjectWhereUniqueInput | AcceptedProjectWhereUniqueInput[]
    disconnect?: AcceptedProjectWhereUniqueInput | AcceptedProjectWhereUniqueInput[]
    delete?: AcceptedProjectWhereUniqueInput | AcceptedProjectWhereUniqueInput[]
    connect?: AcceptedProjectWhereUniqueInput | AcceptedProjectWhereUniqueInput[]
    update?: AcceptedProjectUpdateWithWhereUniqueWithoutUserInput | AcceptedProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AcceptedProjectUpdateManyWithWhereWithoutUserInput | AcceptedProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AcceptedProjectScalarWhereInput | AcceptedProjectScalarWhereInput[]
  }

  export type CompletedPojectUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompletedPojectCreateWithoutUserInput, CompletedPojectUncheckedCreateWithoutUserInput> | CompletedPojectCreateWithoutUserInput[] | CompletedPojectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedPojectCreateOrConnectWithoutUserInput | CompletedPojectCreateOrConnectWithoutUserInput[]
    upsert?: CompletedPojectUpsertWithWhereUniqueWithoutUserInput | CompletedPojectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompletedPojectCreateManyUserInputEnvelope
    set?: CompletedPojectWhereUniqueInput | CompletedPojectWhereUniqueInput[]
    disconnect?: CompletedPojectWhereUniqueInput | CompletedPojectWhereUniqueInput[]
    delete?: CompletedPojectWhereUniqueInput | CompletedPojectWhereUniqueInput[]
    connect?: CompletedPojectWhereUniqueInput | CompletedPojectWhereUniqueInput[]
    update?: CompletedPojectUpdateWithWhereUniqueWithoutUserInput | CompletedPojectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompletedPojectUpdateManyWithWhereWithoutUserInput | CompletedPojectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompletedPojectScalarWhereInput | CompletedPojectScalarWhereInput[]
  }

  export type ProfileSchemaUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileSchemaCreateWithoutUserInput, ProfileSchemaUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileSchemaCreateOrConnectWithoutUserInput
    upsert?: ProfileSchemaUpsertWithoutUserInput
    disconnect?: ProfileSchemaWhereInput | boolean
    delete?: ProfileSchemaWhereInput | boolean
    connect?: ProfileSchemaWhereUniqueInput
    update?: XOR<XOR<ProfileSchemaUpdateToOneWithWhereWithoutUserInput, ProfileSchemaUpdateWithoutUserInput>, ProfileSchemaUncheckedUpdateWithoutUserInput>
  }

  export type ApplyJobUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplyJobCreateWithoutUserInput, ApplyJobUncheckedCreateWithoutUserInput> | ApplyJobCreateWithoutUserInput[] | ApplyJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutUserInput | ApplyJobCreateOrConnectWithoutUserInput[]
    upsert?: ApplyJobUpsertWithWhereUniqueWithoutUserInput | ApplyJobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplyJobCreateManyUserInputEnvelope
    set?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    disconnect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    delete?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    update?: ApplyJobUpdateWithWhereUniqueWithoutUserInput | ApplyJobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplyJobUpdateManyWithWhereWithoutUserInput | ApplyJobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplyJobScalarWhereInput | ApplyJobScalarWhereInput[]
  }

  export type AcceptedProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AcceptedProjectCreateWithoutUserInput, AcceptedProjectUncheckedCreateWithoutUserInput> | AcceptedProjectCreateWithoutUserInput[] | AcceptedProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AcceptedProjectCreateOrConnectWithoutUserInput | AcceptedProjectCreateOrConnectWithoutUserInput[]
    upsert?: AcceptedProjectUpsertWithWhereUniqueWithoutUserInput | AcceptedProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AcceptedProjectCreateManyUserInputEnvelope
    set?: AcceptedProjectWhereUniqueInput | AcceptedProjectWhereUniqueInput[]
    disconnect?: AcceptedProjectWhereUniqueInput | AcceptedProjectWhereUniqueInput[]
    delete?: AcceptedProjectWhereUniqueInput | AcceptedProjectWhereUniqueInput[]
    connect?: AcceptedProjectWhereUniqueInput | AcceptedProjectWhereUniqueInput[]
    update?: AcceptedProjectUpdateWithWhereUniqueWithoutUserInput | AcceptedProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AcceptedProjectUpdateManyWithWhereWithoutUserInput | AcceptedProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AcceptedProjectScalarWhereInput | AcceptedProjectScalarWhereInput[]
  }

  export type CompletedPojectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompletedPojectCreateWithoutUserInput, CompletedPojectUncheckedCreateWithoutUserInput> | CompletedPojectCreateWithoutUserInput[] | CompletedPojectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedPojectCreateOrConnectWithoutUserInput | CompletedPojectCreateOrConnectWithoutUserInput[]
    upsert?: CompletedPojectUpsertWithWhereUniqueWithoutUserInput | CompletedPojectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompletedPojectCreateManyUserInputEnvelope
    set?: CompletedPojectWhereUniqueInput | CompletedPojectWhereUniqueInput[]
    disconnect?: CompletedPojectWhereUniqueInput | CompletedPojectWhereUniqueInput[]
    delete?: CompletedPojectWhereUniqueInput | CompletedPojectWhereUniqueInput[]
    connect?: CompletedPojectWhereUniqueInput | CompletedPojectWhereUniqueInput[]
    update?: CompletedPojectUpdateWithWhereUniqueWithoutUserInput | CompletedPojectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompletedPojectUpdateManyWithWhereWithoutUserInput | CompletedPojectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompletedPojectScalarWhereInput | CompletedPojectScalarWhereInput[]
  }

  export type JobSchemaCreateNestedManyWithoutClientInput = {
    create?: XOR<JobSchemaCreateWithoutClientInput, JobSchemaUncheckedCreateWithoutClientInput> | JobSchemaCreateWithoutClientInput[] | JobSchemaUncheckedCreateWithoutClientInput[]
    connectOrCreate?: JobSchemaCreateOrConnectWithoutClientInput | JobSchemaCreateOrConnectWithoutClientInput[]
    createMany?: JobSchemaCreateManyClientInputEnvelope
    connect?: JobSchemaWhereUniqueInput | JobSchemaWhereUniqueInput[]
  }

  export type ApplyJobCreateNestedManyWithoutClientInput = {
    create?: XOR<ApplyJobCreateWithoutClientInput, ApplyJobUncheckedCreateWithoutClientInput> | ApplyJobCreateWithoutClientInput[] | ApplyJobUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutClientInput | ApplyJobCreateOrConnectWithoutClientInput[]
    createMany?: ApplyJobCreateManyClientInputEnvelope
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
  }

  export type AcceptedProjectCreateNestedManyWithoutClientInput = {
    create?: XOR<AcceptedProjectCreateWithoutClientInput, AcceptedProjectUncheckedCreateWithoutClientInput> | AcceptedProjectCreateWithoutClientInput[] | AcceptedProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AcceptedProjectCreateOrConnectWithoutClientInput | AcceptedProjectCreateOrConnectWithoutClientInput[]
    createMany?: AcceptedProjectCreateManyClientInputEnvelope
    connect?: AcceptedProjectWhereUniqueInput | AcceptedProjectWhereUniqueInput[]
  }

  export type CompletedPojectCreateNestedManyWithoutClientInput = {
    create?: XOR<CompletedPojectCreateWithoutClientInput, CompletedPojectUncheckedCreateWithoutClientInput> | CompletedPojectCreateWithoutClientInput[] | CompletedPojectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CompletedPojectCreateOrConnectWithoutClientInput | CompletedPojectCreateOrConnectWithoutClientInput[]
    createMany?: CompletedPojectCreateManyClientInputEnvelope
    connect?: CompletedPojectWhereUniqueInput | CompletedPojectWhereUniqueInput[]
  }

  export type JobSchemaUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<JobSchemaCreateWithoutClientInput, JobSchemaUncheckedCreateWithoutClientInput> | JobSchemaCreateWithoutClientInput[] | JobSchemaUncheckedCreateWithoutClientInput[]
    connectOrCreate?: JobSchemaCreateOrConnectWithoutClientInput | JobSchemaCreateOrConnectWithoutClientInput[]
    createMany?: JobSchemaCreateManyClientInputEnvelope
    connect?: JobSchemaWhereUniqueInput | JobSchemaWhereUniqueInput[]
  }

  export type ApplyJobUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ApplyJobCreateWithoutClientInput, ApplyJobUncheckedCreateWithoutClientInput> | ApplyJobCreateWithoutClientInput[] | ApplyJobUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutClientInput | ApplyJobCreateOrConnectWithoutClientInput[]
    createMany?: ApplyJobCreateManyClientInputEnvelope
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
  }

  export type AcceptedProjectUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<AcceptedProjectCreateWithoutClientInput, AcceptedProjectUncheckedCreateWithoutClientInput> | AcceptedProjectCreateWithoutClientInput[] | AcceptedProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AcceptedProjectCreateOrConnectWithoutClientInput | AcceptedProjectCreateOrConnectWithoutClientInput[]
    createMany?: AcceptedProjectCreateManyClientInputEnvelope
    connect?: AcceptedProjectWhereUniqueInput | AcceptedProjectWhereUniqueInput[]
  }

  export type CompletedPojectUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<CompletedPojectCreateWithoutClientInput, CompletedPojectUncheckedCreateWithoutClientInput> | CompletedPojectCreateWithoutClientInput[] | CompletedPojectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CompletedPojectCreateOrConnectWithoutClientInput | CompletedPojectCreateOrConnectWithoutClientInput[]
    createMany?: CompletedPojectCreateManyClientInputEnvelope
    connect?: CompletedPojectWhereUniqueInput | CompletedPojectWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type JobSchemaUpdateManyWithoutClientNestedInput = {
    create?: XOR<JobSchemaCreateWithoutClientInput, JobSchemaUncheckedCreateWithoutClientInput> | JobSchemaCreateWithoutClientInput[] | JobSchemaUncheckedCreateWithoutClientInput[]
    connectOrCreate?: JobSchemaCreateOrConnectWithoutClientInput | JobSchemaCreateOrConnectWithoutClientInput[]
    upsert?: JobSchemaUpsertWithWhereUniqueWithoutClientInput | JobSchemaUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: JobSchemaCreateManyClientInputEnvelope
    set?: JobSchemaWhereUniqueInput | JobSchemaWhereUniqueInput[]
    disconnect?: JobSchemaWhereUniqueInput | JobSchemaWhereUniqueInput[]
    delete?: JobSchemaWhereUniqueInput | JobSchemaWhereUniqueInput[]
    connect?: JobSchemaWhereUniqueInput | JobSchemaWhereUniqueInput[]
    update?: JobSchemaUpdateWithWhereUniqueWithoutClientInput | JobSchemaUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: JobSchemaUpdateManyWithWhereWithoutClientInput | JobSchemaUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: JobSchemaScalarWhereInput | JobSchemaScalarWhereInput[]
  }

  export type ApplyJobUpdateManyWithoutClientNestedInput = {
    create?: XOR<ApplyJobCreateWithoutClientInput, ApplyJobUncheckedCreateWithoutClientInput> | ApplyJobCreateWithoutClientInput[] | ApplyJobUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutClientInput | ApplyJobCreateOrConnectWithoutClientInput[]
    upsert?: ApplyJobUpsertWithWhereUniqueWithoutClientInput | ApplyJobUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ApplyJobCreateManyClientInputEnvelope
    set?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    disconnect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    delete?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    update?: ApplyJobUpdateWithWhereUniqueWithoutClientInput | ApplyJobUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ApplyJobUpdateManyWithWhereWithoutClientInput | ApplyJobUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ApplyJobScalarWhereInput | ApplyJobScalarWhereInput[]
  }

  export type AcceptedProjectUpdateManyWithoutClientNestedInput = {
    create?: XOR<AcceptedProjectCreateWithoutClientInput, AcceptedProjectUncheckedCreateWithoutClientInput> | AcceptedProjectCreateWithoutClientInput[] | AcceptedProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AcceptedProjectCreateOrConnectWithoutClientInput | AcceptedProjectCreateOrConnectWithoutClientInput[]
    upsert?: AcceptedProjectUpsertWithWhereUniqueWithoutClientInput | AcceptedProjectUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AcceptedProjectCreateManyClientInputEnvelope
    set?: AcceptedProjectWhereUniqueInput | AcceptedProjectWhereUniqueInput[]
    disconnect?: AcceptedProjectWhereUniqueInput | AcceptedProjectWhereUniqueInput[]
    delete?: AcceptedProjectWhereUniqueInput | AcceptedProjectWhereUniqueInput[]
    connect?: AcceptedProjectWhereUniqueInput | AcceptedProjectWhereUniqueInput[]
    update?: AcceptedProjectUpdateWithWhereUniqueWithoutClientInput | AcceptedProjectUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AcceptedProjectUpdateManyWithWhereWithoutClientInput | AcceptedProjectUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AcceptedProjectScalarWhereInput | AcceptedProjectScalarWhereInput[]
  }

  export type CompletedPojectUpdateManyWithoutClientNestedInput = {
    create?: XOR<CompletedPojectCreateWithoutClientInput, CompletedPojectUncheckedCreateWithoutClientInput> | CompletedPojectCreateWithoutClientInput[] | CompletedPojectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CompletedPojectCreateOrConnectWithoutClientInput | CompletedPojectCreateOrConnectWithoutClientInput[]
    upsert?: CompletedPojectUpsertWithWhereUniqueWithoutClientInput | CompletedPojectUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CompletedPojectCreateManyClientInputEnvelope
    set?: CompletedPojectWhereUniqueInput | CompletedPojectWhereUniqueInput[]
    disconnect?: CompletedPojectWhereUniqueInput | CompletedPojectWhereUniqueInput[]
    delete?: CompletedPojectWhereUniqueInput | CompletedPojectWhereUniqueInput[]
    connect?: CompletedPojectWhereUniqueInput | CompletedPojectWhereUniqueInput[]
    update?: CompletedPojectUpdateWithWhereUniqueWithoutClientInput | CompletedPojectUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CompletedPojectUpdateManyWithWhereWithoutClientInput | CompletedPojectUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CompletedPojectScalarWhereInput | CompletedPojectScalarWhereInput[]
  }

  export type JobSchemaUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<JobSchemaCreateWithoutClientInput, JobSchemaUncheckedCreateWithoutClientInput> | JobSchemaCreateWithoutClientInput[] | JobSchemaUncheckedCreateWithoutClientInput[]
    connectOrCreate?: JobSchemaCreateOrConnectWithoutClientInput | JobSchemaCreateOrConnectWithoutClientInput[]
    upsert?: JobSchemaUpsertWithWhereUniqueWithoutClientInput | JobSchemaUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: JobSchemaCreateManyClientInputEnvelope
    set?: JobSchemaWhereUniqueInput | JobSchemaWhereUniqueInput[]
    disconnect?: JobSchemaWhereUniqueInput | JobSchemaWhereUniqueInput[]
    delete?: JobSchemaWhereUniqueInput | JobSchemaWhereUniqueInput[]
    connect?: JobSchemaWhereUniqueInput | JobSchemaWhereUniqueInput[]
    update?: JobSchemaUpdateWithWhereUniqueWithoutClientInput | JobSchemaUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: JobSchemaUpdateManyWithWhereWithoutClientInput | JobSchemaUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: JobSchemaScalarWhereInput | JobSchemaScalarWhereInput[]
  }

  export type ApplyJobUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ApplyJobCreateWithoutClientInput, ApplyJobUncheckedCreateWithoutClientInput> | ApplyJobCreateWithoutClientInput[] | ApplyJobUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutClientInput | ApplyJobCreateOrConnectWithoutClientInput[]
    upsert?: ApplyJobUpsertWithWhereUniqueWithoutClientInput | ApplyJobUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ApplyJobCreateManyClientInputEnvelope
    set?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    disconnect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    delete?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    update?: ApplyJobUpdateWithWhereUniqueWithoutClientInput | ApplyJobUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ApplyJobUpdateManyWithWhereWithoutClientInput | ApplyJobUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ApplyJobScalarWhereInput | ApplyJobScalarWhereInput[]
  }

  export type AcceptedProjectUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<AcceptedProjectCreateWithoutClientInput, AcceptedProjectUncheckedCreateWithoutClientInput> | AcceptedProjectCreateWithoutClientInput[] | AcceptedProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AcceptedProjectCreateOrConnectWithoutClientInput | AcceptedProjectCreateOrConnectWithoutClientInput[]
    upsert?: AcceptedProjectUpsertWithWhereUniqueWithoutClientInput | AcceptedProjectUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AcceptedProjectCreateManyClientInputEnvelope
    set?: AcceptedProjectWhereUniqueInput | AcceptedProjectWhereUniqueInput[]
    disconnect?: AcceptedProjectWhereUniqueInput | AcceptedProjectWhereUniqueInput[]
    delete?: AcceptedProjectWhereUniqueInput | AcceptedProjectWhereUniqueInput[]
    connect?: AcceptedProjectWhereUniqueInput | AcceptedProjectWhereUniqueInput[]
    update?: AcceptedProjectUpdateWithWhereUniqueWithoutClientInput | AcceptedProjectUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AcceptedProjectUpdateManyWithWhereWithoutClientInput | AcceptedProjectUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AcceptedProjectScalarWhereInput | AcceptedProjectScalarWhereInput[]
  }

  export type CompletedPojectUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<CompletedPojectCreateWithoutClientInput, CompletedPojectUncheckedCreateWithoutClientInput> | CompletedPojectCreateWithoutClientInput[] | CompletedPojectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CompletedPojectCreateOrConnectWithoutClientInput | CompletedPojectCreateOrConnectWithoutClientInput[]
    upsert?: CompletedPojectUpsertWithWhereUniqueWithoutClientInput | CompletedPojectUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CompletedPojectCreateManyClientInputEnvelope
    set?: CompletedPojectWhereUniqueInput | CompletedPojectWhereUniqueInput[]
    disconnect?: CompletedPojectWhereUniqueInput | CompletedPojectWhereUniqueInput[]
    delete?: CompletedPojectWhereUniqueInput | CompletedPojectWhereUniqueInput[]
    connect?: CompletedPojectWhereUniqueInput | CompletedPojectWhereUniqueInput[]
    update?: CompletedPojectUpdateWithWhereUniqueWithoutClientInput | CompletedPojectUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CompletedPojectUpdateManyWithWhereWithoutClientInput | CompletedPojectUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CompletedPojectScalarWhereInput | CompletedPojectScalarWhereInput[]
  }

  export type ProfileSchemaCreateProjectLinkInput = {
    set: string[]
  }

  export type UserSchemaCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserSchemaCreateWithoutProfileInput, UserSchemaUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserSchemaCreateOrConnectWithoutProfileInput
    connect?: UserSchemaWhereUniqueInput
  }

  export type ApplyJobCreateNestedManyWithoutProfileInput = {
    create?: XOR<ApplyJobCreateWithoutProfileInput, ApplyJobUncheckedCreateWithoutProfileInput> | ApplyJobCreateWithoutProfileInput[] | ApplyJobUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutProfileInput | ApplyJobCreateOrConnectWithoutProfileInput[]
    createMany?: ApplyJobCreateManyProfileInputEnvelope
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
  }

  export type ApplyJobUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<ApplyJobCreateWithoutProfileInput, ApplyJobUncheckedCreateWithoutProfileInput> | ApplyJobCreateWithoutProfileInput[] | ApplyJobUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutProfileInput | ApplyJobCreateOrConnectWithoutProfileInput[]
    createMany?: ApplyJobCreateManyProfileInputEnvelope
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
  }

  export type ProfileSchemaUpdateProjectLinkInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserSchemaUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserSchemaCreateWithoutProfileInput, UserSchemaUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserSchemaCreateOrConnectWithoutProfileInput
    upsert?: UserSchemaUpsertWithoutProfileInput
    connect?: UserSchemaWhereUniqueInput
    update?: XOR<XOR<UserSchemaUpdateToOneWithWhereWithoutProfileInput, UserSchemaUpdateWithoutProfileInput>, UserSchemaUncheckedUpdateWithoutProfileInput>
  }

  export type ApplyJobUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ApplyJobCreateWithoutProfileInput, ApplyJobUncheckedCreateWithoutProfileInput> | ApplyJobCreateWithoutProfileInput[] | ApplyJobUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutProfileInput | ApplyJobCreateOrConnectWithoutProfileInput[]
    upsert?: ApplyJobUpsertWithWhereUniqueWithoutProfileInput | ApplyJobUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ApplyJobCreateManyProfileInputEnvelope
    set?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    disconnect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    delete?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    update?: ApplyJobUpdateWithWhereUniqueWithoutProfileInput | ApplyJobUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ApplyJobUpdateManyWithWhereWithoutProfileInput | ApplyJobUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ApplyJobScalarWhereInput | ApplyJobScalarWhereInput[]
  }

  export type ApplyJobUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ApplyJobCreateWithoutProfileInput, ApplyJobUncheckedCreateWithoutProfileInput> | ApplyJobCreateWithoutProfileInput[] | ApplyJobUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutProfileInput | ApplyJobCreateOrConnectWithoutProfileInput[]
    upsert?: ApplyJobUpsertWithWhereUniqueWithoutProfileInput | ApplyJobUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ApplyJobCreateManyProfileInputEnvelope
    set?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    disconnect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    delete?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    update?: ApplyJobUpdateWithWhereUniqueWithoutProfileInput | ApplyJobUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ApplyJobUpdateManyWithWhereWithoutProfileInput | ApplyJobUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ApplyJobScalarWhereInput | ApplyJobScalarWhereInput[]
  }

  export type ClientSchemaCreateNestedOneWithoutJobschemaInput = {
    create?: XOR<ClientSchemaCreateWithoutJobschemaInput, ClientSchemaUncheckedCreateWithoutJobschemaInput>
    connectOrCreate?: ClientSchemaCreateOrConnectWithoutJobschemaInput
    connect?: ClientSchemaWhereUniqueInput
  }

  export type ApplyJobCreateNestedManyWithoutJobschemaInput = {
    create?: XOR<ApplyJobCreateWithoutJobschemaInput, ApplyJobUncheckedCreateWithoutJobschemaInput> | ApplyJobCreateWithoutJobschemaInput[] | ApplyJobUncheckedCreateWithoutJobschemaInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutJobschemaInput | ApplyJobCreateOrConnectWithoutJobschemaInput[]
    createMany?: ApplyJobCreateManyJobschemaInputEnvelope
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
  }

  export type ApplyJobUncheckedCreateNestedManyWithoutJobschemaInput = {
    create?: XOR<ApplyJobCreateWithoutJobschemaInput, ApplyJobUncheckedCreateWithoutJobschemaInput> | ApplyJobCreateWithoutJobschemaInput[] | ApplyJobUncheckedCreateWithoutJobschemaInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutJobschemaInput | ApplyJobCreateOrConnectWithoutJobschemaInput[]
    createMany?: ApplyJobCreateManyJobschemaInputEnvelope
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
  }

  export type ClientSchemaUpdateOneRequiredWithoutJobschemaNestedInput = {
    create?: XOR<ClientSchemaCreateWithoutJobschemaInput, ClientSchemaUncheckedCreateWithoutJobschemaInput>
    connectOrCreate?: ClientSchemaCreateOrConnectWithoutJobschemaInput
    upsert?: ClientSchemaUpsertWithoutJobschemaInput
    connect?: ClientSchemaWhereUniqueInput
    update?: XOR<XOR<ClientSchemaUpdateToOneWithWhereWithoutJobschemaInput, ClientSchemaUpdateWithoutJobschemaInput>, ClientSchemaUncheckedUpdateWithoutJobschemaInput>
  }

  export type ApplyJobUpdateManyWithoutJobschemaNestedInput = {
    create?: XOR<ApplyJobCreateWithoutJobschemaInput, ApplyJobUncheckedCreateWithoutJobschemaInput> | ApplyJobCreateWithoutJobschemaInput[] | ApplyJobUncheckedCreateWithoutJobschemaInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutJobschemaInput | ApplyJobCreateOrConnectWithoutJobschemaInput[]
    upsert?: ApplyJobUpsertWithWhereUniqueWithoutJobschemaInput | ApplyJobUpsertWithWhereUniqueWithoutJobschemaInput[]
    createMany?: ApplyJobCreateManyJobschemaInputEnvelope
    set?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    disconnect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    delete?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    update?: ApplyJobUpdateWithWhereUniqueWithoutJobschemaInput | ApplyJobUpdateWithWhereUniqueWithoutJobschemaInput[]
    updateMany?: ApplyJobUpdateManyWithWhereWithoutJobschemaInput | ApplyJobUpdateManyWithWhereWithoutJobschemaInput[]
    deleteMany?: ApplyJobScalarWhereInput | ApplyJobScalarWhereInput[]
  }

  export type ApplyJobUncheckedUpdateManyWithoutJobschemaNestedInput = {
    create?: XOR<ApplyJobCreateWithoutJobschemaInput, ApplyJobUncheckedCreateWithoutJobschemaInput> | ApplyJobCreateWithoutJobschemaInput[] | ApplyJobUncheckedCreateWithoutJobschemaInput[]
    connectOrCreate?: ApplyJobCreateOrConnectWithoutJobschemaInput | ApplyJobCreateOrConnectWithoutJobschemaInput[]
    upsert?: ApplyJobUpsertWithWhereUniqueWithoutJobschemaInput | ApplyJobUpsertWithWhereUniqueWithoutJobschemaInput[]
    createMany?: ApplyJobCreateManyJobschemaInputEnvelope
    set?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    disconnect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    delete?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    connect?: ApplyJobWhereUniqueInput | ApplyJobWhereUniqueInput[]
    update?: ApplyJobUpdateWithWhereUniqueWithoutJobschemaInput | ApplyJobUpdateWithWhereUniqueWithoutJobschemaInput[]
    updateMany?: ApplyJobUpdateManyWithWhereWithoutJobschemaInput | ApplyJobUpdateManyWithWhereWithoutJobschemaInput[]
    deleteMany?: ApplyJobScalarWhereInput | ApplyJobScalarWhereInput[]
  }

  export type UserSchemaCreateNestedOneWithoutApplyJobInput = {
    create?: XOR<UserSchemaCreateWithoutApplyJobInput, UserSchemaUncheckedCreateWithoutApplyJobInput>
    connectOrCreate?: UserSchemaCreateOrConnectWithoutApplyJobInput
    connect?: UserSchemaWhereUniqueInput
  }

  export type ClientSchemaCreateNestedOneWithoutApplyJobsInput = {
    create?: XOR<ClientSchemaCreateWithoutApplyJobsInput, ClientSchemaUncheckedCreateWithoutApplyJobsInput>
    connectOrCreate?: ClientSchemaCreateOrConnectWithoutApplyJobsInput
    connect?: ClientSchemaWhereUniqueInput
  }

  export type ProfileSchemaCreateNestedOneWithoutApplyJobsInput = {
    create?: XOR<ProfileSchemaCreateWithoutApplyJobsInput, ProfileSchemaUncheckedCreateWithoutApplyJobsInput>
    connectOrCreate?: ProfileSchemaCreateOrConnectWithoutApplyJobsInput
    connect?: ProfileSchemaWhereUniqueInput
  }

  export type JobSchemaCreateNestedOneWithoutApplyJobInput = {
    create?: XOR<JobSchemaCreateWithoutApplyJobInput, JobSchemaUncheckedCreateWithoutApplyJobInput>
    connectOrCreate?: JobSchemaCreateOrConnectWithoutApplyJobInput
    connect?: JobSchemaWhereUniqueInput
  }

  export type UserSchemaUpdateOneRequiredWithoutApplyJobNestedInput = {
    create?: XOR<UserSchemaCreateWithoutApplyJobInput, UserSchemaUncheckedCreateWithoutApplyJobInput>
    connectOrCreate?: UserSchemaCreateOrConnectWithoutApplyJobInput
    upsert?: UserSchemaUpsertWithoutApplyJobInput
    connect?: UserSchemaWhereUniqueInput
    update?: XOR<XOR<UserSchemaUpdateToOneWithWhereWithoutApplyJobInput, UserSchemaUpdateWithoutApplyJobInput>, UserSchemaUncheckedUpdateWithoutApplyJobInput>
  }

  export type ClientSchemaUpdateOneRequiredWithoutApplyJobsNestedInput = {
    create?: XOR<ClientSchemaCreateWithoutApplyJobsInput, ClientSchemaUncheckedCreateWithoutApplyJobsInput>
    connectOrCreate?: ClientSchemaCreateOrConnectWithoutApplyJobsInput
    upsert?: ClientSchemaUpsertWithoutApplyJobsInput
    connect?: ClientSchemaWhereUniqueInput
    update?: XOR<XOR<ClientSchemaUpdateToOneWithWhereWithoutApplyJobsInput, ClientSchemaUpdateWithoutApplyJobsInput>, ClientSchemaUncheckedUpdateWithoutApplyJobsInput>
  }

  export type ProfileSchemaUpdateOneRequiredWithoutApplyJobsNestedInput = {
    create?: XOR<ProfileSchemaCreateWithoutApplyJobsInput, ProfileSchemaUncheckedCreateWithoutApplyJobsInput>
    connectOrCreate?: ProfileSchemaCreateOrConnectWithoutApplyJobsInput
    upsert?: ProfileSchemaUpsertWithoutApplyJobsInput
    connect?: ProfileSchemaWhereUniqueInput
    update?: XOR<XOR<ProfileSchemaUpdateToOneWithWhereWithoutApplyJobsInput, ProfileSchemaUpdateWithoutApplyJobsInput>, ProfileSchemaUncheckedUpdateWithoutApplyJobsInput>
  }

  export type JobSchemaUpdateOneRequiredWithoutApplyJobNestedInput = {
    create?: XOR<JobSchemaCreateWithoutApplyJobInput, JobSchemaUncheckedCreateWithoutApplyJobInput>
    connectOrCreate?: JobSchemaCreateOrConnectWithoutApplyJobInput
    upsert?: JobSchemaUpsertWithoutApplyJobInput
    connect?: JobSchemaWhereUniqueInput
    update?: XOR<XOR<JobSchemaUpdateToOneWithWhereWithoutApplyJobInput, JobSchemaUpdateWithoutApplyJobInput>, JobSchemaUncheckedUpdateWithoutApplyJobInput>
  }

  export type ClientSchemaCreateNestedOneWithoutAcceptedProjectInput = {
    create?: XOR<ClientSchemaCreateWithoutAcceptedProjectInput, ClientSchemaUncheckedCreateWithoutAcceptedProjectInput>
    connectOrCreate?: ClientSchemaCreateOrConnectWithoutAcceptedProjectInput
    connect?: ClientSchemaWhereUniqueInput
  }

  export type UserSchemaCreateNestedOneWithoutAcceptedProjectInput = {
    create?: XOR<UserSchemaCreateWithoutAcceptedProjectInput, UserSchemaUncheckedCreateWithoutAcceptedProjectInput>
    connectOrCreate?: UserSchemaCreateOrConnectWithoutAcceptedProjectInput
    connect?: UserSchemaWhereUniqueInput
  }

  export type ClientSchemaUpdateOneRequiredWithoutAcceptedProjectNestedInput = {
    create?: XOR<ClientSchemaCreateWithoutAcceptedProjectInput, ClientSchemaUncheckedCreateWithoutAcceptedProjectInput>
    connectOrCreate?: ClientSchemaCreateOrConnectWithoutAcceptedProjectInput
    upsert?: ClientSchemaUpsertWithoutAcceptedProjectInput
    connect?: ClientSchemaWhereUniqueInput
    update?: XOR<XOR<ClientSchemaUpdateToOneWithWhereWithoutAcceptedProjectInput, ClientSchemaUpdateWithoutAcceptedProjectInput>, ClientSchemaUncheckedUpdateWithoutAcceptedProjectInput>
  }

  export type UserSchemaUpdateOneRequiredWithoutAcceptedProjectNestedInput = {
    create?: XOR<UserSchemaCreateWithoutAcceptedProjectInput, UserSchemaUncheckedCreateWithoutAcceptedProjectInput>
    connectOrCreate?: UserSchemaCreateOrConnectWithoutAcceptedProjectInput
    upsert?: UserSchemaUpsertWithoutAcceptedProjectInput
    connect?: UserSchemaWhereUniqueInput
    update?: XOR<XOR<UserSchemaUpdateToOneWithWhereWithoutAcceptedProjectInput, UserSchemaUpdateWithoutAcceptedProjectInput>, UserSchemaUncheckedUpdateWithoutAcceptedProjectInput>
  }

  export type ClientSchemaCreateNestedOneWithoutCompletedPojectInput = {
    create?: XOR<ClientSchemaCreateWithoutCompletedPojectInput, ClientSchemaUncheckedCreateWithoutCompletedPojectInput>
    connectOrCreate?: ClientSchemaCreateOrConnectWithoutCompletedPojectInput
    connect?: ClientSchemaWhereUniqueInput
  }

  export type UserSchemaCreateNestedOneWithoutCompletedPojectInput = {
    create?: XOR<UserSchemaCreateWithoutCompletedPojectInput, UserSchemaUncheckedCreateWithoutCompletedPojectInput>
    connectOrCreate?: UserSchemaCreateOrConnectWithoutCompletedPojectInput
    connect?: UserSchemaWhereUniqueInput
  }

  export type ClientSchemaUpdateOneRequiredWithoutCompletedPojectNestedInput = {
    create?: XOR<ClientSchemaCreateWithoutCompletedPojectInput, ClientSchemaUncheckedCreateWithoutCompletedPojectInput>
    connectOrCreate?: ClientSchemaCreateOrConnectWithoutCompletedPojectInput
    upsert?: ClientSchemaUpsertWithoutCompletedPojectInput
    connect?: ClientSchemaWhereUniqueInput
    update?: XOR<XOR<ClientSchemaUpdateToOneWithWhereWithoutCompletedPojectInput, ClientSchemaUpdateWithoutCompletedPojectInput>, ClientSchemaUncheckedUpdateWithoutCompletedPojectInput>
  }

  export type UserSchemaUpdateOneRequiredWithoutCompletedPojectNestedInput = {
    create?: XOR<UserSchemaCreateWithoutCompletedPojectInput, UserSchemaUncheckedCreateWithoutCompletedPojectInput>
    connectOrCreate?: UserSchemaCreateOrConnectWithoutCompletedPojectInput
    upsert?: UserSchemaUpsertWithoutCompletedPojectInput
    connect?: UserSchemaWhereUniqueInput
    update?: XOR<XOR<UserSchemaUpdateToOneWithWhereWithoutCompletedPojectInput, UserSchemaUpdateWithoutCompletedPojectInput>, UserSchemaUncheckedUpdateWithoutCompletedPojectInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProfileSchemaCreateWithoutUserInput = {
    About: string
    ProjectLink?: ProfileSchemaCreateProjectLinkInput | string[]
    applyJobs?: ApplyJobCreateNestedManyWithoutProfileInput
  }

  export type ProfileSchemaUncheckedCreateWithoutUserInput = {
    profile_id?: number
    About: string
    ProjectLink?: ProfileSchemaCreateProjectLinkInput | string[]
    applyJobs?: ApplyJobUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileSchemaCreateOrConnectWithoutUserInput = {
    where: ProfileSchemaWhereUniqueInput
    create: XOR<ProfileSchemaCreateWithoutUserInput, ProfileSchemaUncheckedCreateWithoutUserInput>
  }

  export type ApplyJobCreateWithoutUserInput = {
    jobtitle: string
    budget?: string
    timeline?: string
    client: ClientSchemaCreateNestedOneWithoutApplyJobsInput
    profile: ProfileSchemaCreateNestedOneWithoutApplyJobsInput
    jobschema?: JobSchemaCreateNestedOneWithoutApplyJobInput
  }

  export type ApplyJobUncheckedCreateWithoutUserInput = {
    applyjobid?: number
    clientid: number
    jobtitle: string
    budget?: string
    timeline?: string
    jobid?: number
  }

  export type ApplyJobCreateOrConnectWithoutUserInput = {
    where: ApplyJobWhereUniqueInput
    create: XOR<ApplyJobCreateWithoutUserInput, ApplyJobUncheckedCreateWithoutUserInput>
  }

  export type ApplyJobCreateManyUserInputEnvelope = {
    data: ApplyJobCreateManyUserInput | ApplyJobCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AcceptedProjectCreateWithoutUserInput = {
    project_title: string
    budget: string
    timeline: string
    client: ClientSchemaCreateNestedOneWithoutAcceptedProjectInput
  }

  export type AcceptedProjectUncheckedCreateWithoutUserInput = {
    aaplyproject?: number
    client_id: number
    project_title: string
    budget: string
    timeline: string
  }

  export type AcceptedProjectCreateOrConnectWithoutUserInput = {
    where: AcceptedProjectWhereUniqueInput
    create: XOR<AcceptedProjectCreateWithoutUserInput, AcceptedProjectUncheckedCreateWithoutUserInput>
  }

  export type AcceptedProjectCreateManyUserInputEnvelope = {
    data: AcceptedProjectCreateManyUserInput | AcceptedProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CompletedPojectCreateWithoutUserInput = {
    project_title: string
    budget: string
    timeline: string
    client: ClientSchemaCreateNestedOneWithoutCompletedPojectInput
  }

  export type CompletedPojectUncheckedCreateWithoutUserInput = {
    completedprojectid?: number
    client_id: number
    project_title: string
    budget: string
    timeline: string
  }

  export type CompletedPojectCreateOrConnectWithoutUserInput = {
    where: CompletedPojectWhereUniqueInput
    create: XOR<CompletedPojectCreateWithoutUserInput, CompletedPojectUncheckedCreateWithoutUserInput>
  }

  export type CompletedPojectCreateManyUserInputEnvelope = {
    data: CompletedPojectCreateManyUserInput | CompletedPojectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileSchemaUpsertWithoutUserInput = {
    update: XOR<ProfileSchemaUpdateWithoutUserInput, ProfileSchemaUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileSchemaCreateWithoutUserInput, ProfileSchemaUncheckedCreateWithoutUserInput>
    where?: ProfileSchemaWhereInput
  }

  export type ProfileSchemaUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileSchemaWhereInput
    data: XOR<ProfileSchemaUpdateWithoutUserInput, ProfileSchemaUncheckedUpdateWithoutUserInput>
  }

  export type ProfileSchemaUpdateWithoutUserInput = {
    About?: StringFieldUpdateOperationsInput | string
    ProjectLink?: ProfileSchemaUpdateProjectLinkInput | string[]
    applyJobs?: ApplyJobUpdateManyWithoutProfileNestedInput
  }

  export type ProfileSchemaUncheckedUpdateWithoutUserInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    About?: StringFieldUpdateOperationsInput | string
    ProjectLink?: ProfileSchemaUpdateProjectLinkInput | string[]
    applyJobs?: ApplyJobUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ApplyJobUpsertWithWhereUniqueWithoutUserInput = {
    where: ApplyJobWhereUniqueInput
    update: XOR<ApplyJobUpdateWithoutUserInput, ApplyJobUncheckedUpdateWithoutUserInput>
    create: XOR<ApplyJobCreateWithoutUserInput, ApplyJobUncheckedCreateWithoutUserInput>
  }

  export type ApplyJobUpdateWithWhereUniqueWithoutUserInput = {
    where: ApplyJobWhereUniqueInput
    data: XOR<ApplyJobUpdateWithoutUserInput, ApplyJobUncheckedUpdateWithoutUserInput>
  }

  export type ApplyJobUpdateManyWithWhereWithoutUserInput = {
    where: ApplyJobScalarWhereInput
    data: XOR<ApplyJobUpdateManyMutationInput, ApplyJobUncheckedUpdateManyWithoutUserInput>
  }

  export type ApplyJobScalarWhereInput = {
    AND?: ApplyJobScalarWhereInput | ApplyJobScalarWhereInput[]
    OR?: ApplyJobScalarWhereInput[]
    NOT?: ApplyJobScalarWhereInput | ApplyJobScalarWhereInput[]
    applyjobid?: IntFilter<"ApplyJob"> | number
    clientid?: IntFilter<"ApplyJob"> | number
    userid?: IntFilter<"ApplyJob"> | number
    jobtitle?: StringFilter<"ApplyJob"> | string
    budget?: StringFilter<"ApplyJob"> | string
    timeline?: StringFilter<"ApplyJob"> | string
    jobid?: IntFilter<"ApplyJob"> | number
  }

  export type AcceptedProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: AcceptedProjectWhereUniqueInput
    update: XOR<AcceptedProjectUpdateWithoutUserInput, AcceptedProjectUncheckedUpdateWithoutUserInput>
    create: XOR<AcceptedProjectCreateWithoutUserInput, AcceptedProjectUncheckedCreateWithoutUserInput>
  }

  export type AcceptedProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: AcceptedProjectWhereUniqueInput
    data: XOR<AcceptedProjectUpdateWithoutUserInput, AcceptedProjectUncheckedUpdateWithoutUserInput>
  }

  export type AcceptedProjectUpdateManyWithWhereWithoutUserInput = {
    where: AcceptedProjectScalarWhereInput
    data: XOR<AcceptedProjectUpdateManyMutationInput, AcceptedProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type AcceptedProjectScalarWhereInput = {
    AND?: AcceptedProjectScalarWhereInput | AcceptedProjectScalarWhereInput[]
    OR?: AcceptedProjectScalarWhereInput[]
    NOT?: AcceptedProjectScalarWhereInput | AcceptedProjectScalarWhereInput[]
    aaplyproject?: IntFilter<"AcceptedProject"> | number
    client_id?: IntFilter<"AcceptedProject"> | number
    userid?: IntFilter<"AcceptedProject"> | number
    project_title?: StringFilter<"AcceptedProject"> | string
    budget?: StringFilter<"AcceptedProject"> | string
    timeline?: StringFilter<"AcceptedProject"> | string
  }

  export type CompletedPojectUpsertWithWhereUniqueWithoutUserInput = {
    where: CompletedPojectWhereUniqueInput
    update: XOR<CompletedPojectUpdateWithoutUserInput, CompletedPojectUncheckedUpdateWithoutUserInput>
    create: XOR<CompletedPojectCreateWithoutUserInput, CompletedPojectUncheckedCreateWithoutUserInput>
  }

  export type CompletedPojectUpdateWithWhereUniqueWithoutUserInput = {
    where: CompletedPojectWhereUniqueInput
    data: XOR<CompletedPojectUpdateWithoutUserInput, CompletedPojectUncheckedUpdateWithoutUserInput>
  }

  export type CompletedPojectUpdateManyWithWhereWithoutUserInput = {
    where: CompletedPojectScalarWhereInput
    data: XOR<CompletedPojectUpdateManyMutationInput, CompletedPojectUncheckedUpdateManyWithoutUserInput>
  }

  export type CompletedPojectScalarWhereInput = {
    AND?: CompletedPojectScalarWhereInput | CompletedPojectScalarWhereInput[]
    OR?: CompletedPojectScalarWhereInput[]
    NOT?: CompletedPojectScalarWhereInput | CompletedPojectScalarWhereInput[]
    completedprojectid?: IntFilter<"CompletedPoject"> | number
    client_id?: IntFilter<"CompletedPoject"> | number
    userid?: IntFilter<"CompletedPoject"> | number
    project_title?: StringFilter<"CompletedPoject"> | string
    budget?: StringFilter<"CompletedPoject"> | string
    timeline?: StringFilter<"CompletedPoject"> | string
  }

  export type JobSchemaCreateWithoutClientInput = {
    Job_titile: string
    Job_description: string
    Budget: string
    Timeline: string
    applyJob?: ApplyJobCreateNestedManyWithoutJobschemaInput
  }

  export type JobSchemaUncheckedCreateWithoutClientInput = {
    job_id?: number
    Job_titile: string
    Job_description: string
    Budget: string
    Timeline: string
    applyJob?: ApplyJobUncheckedCreateNestedManyWithoutJobschemaInput
  }

  export type JobSchemaCreateOrConnectWithoutClientInput = {
    where: JobSchemaWhereUniqueInput
    create: XOR<JobSchemaCreateWithoutClientInput, JobSchemaUncheckedCreateWithoutClientInput>
  }

  export type JobSchemaCreateManyClientInputEnvelope = {
    data: JobSchemaCreateManyClientInput | JobSchemaCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ApplyJobCreateWithoutClientInput = {
    jobtitle: string
    budget?: string
    timeline?: string
    user: UserSchemaCreateNestedOneWithoutApplyJobInput
    profile: ProfileSchemaCreateNestedOneWithoutApplyJobsInput
    jobschema?: JobSchemaCreateNestedOneWithoutApplyJobInput
  }

  export type ApplyJobUncheckedCreateWithoutClientInput = {
    applyjobid?: number
    userid: number
    jobtitle: string
    budget?: string
    timeline?: string
    jobid?: number
  }

  export type ApplyJobCreateOrConnectWithoutClientInput = {
    where: ApplyJobWhereUniqueInput
    create: XOR<ApplyJobCreateWithoutClientInput, ApplyJobUncheckedCreateWithoutClientInput>
  }

  export type ApplyJobCreateManyClientInputEnvelope = {
    data: ApplyJobCreateManyClientInput | ApplyJobCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type AcceptedProjectCreateWithoutClientInput = {
    project_title: string
    budget: string
    timeline: string
    user: UserSchemaCreateNestedOneWithoutAcceptedProjectInput
  }

  export type AcceptedProjectUncheckedCreateWithoutClientInput = {
    aaplyproject?: number
    userid: number
    project_title: string
    budget: string
    timeline: string
  }

  export type AcceptedProjectCreateOrConnectWithoutClientInput = {
    where: AcceptedProjectWhereUniqueInput
    create: XOR<AcceptedProjectCreateWithoutClientInput, AcceptedProjectUncheckedCreateWithoutClientInput>
  }

  export type AcceptedProjectCreateManyClientInputEnvelope = {
    data: AcceptedProjectCreateManyClientInput | AcceptedProjectCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type CompletedPojectCreateWithoutClientInput = {
    project_title: string
    budget: string
    timeline: string
    user: UserSchemaCreateNestedOneWithoutCompletedPojectInput
  }

  export type CompletedPojectUncheckedCreateWithoutClientInput = {
    completedprojectid?: number
    userid: number
    project_title: string
    budget: string
    timeline: string
  }

  export type CompletedPojectCreateOrConnectWithoutClientInput = {
    where: CompletedPojectWhereUniqueInput
    create: XOR<CompletedPojectCreateWithoutClientInput, CompletedPojectUncheckedCreateWithoutClientInput>
  }

  export type CompletedPojectCreateManyClientInputEnvelope = {
    data: CompletedPojectCreateManyClientInput | CompletedPojectCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type JobSchemaUpsertWithWhereUniqueWithoutClientInput = {
    where: JobSchemaWhereUniqueInput
    update: XOR<JobSchemaUpdateWithoutClientInput, JobSchemaUncheckedUpdateWithoutClientInput>
    create: XOR<JobSchemaCreateWithoutClientInput, JobSchemaUncheckedCreateWithoutClientInput>
  }

  export type JobSchemaUpdateWithWhereUniqueWithoutClientInput = {
    where: JobSchemaWhereUniqueInput
    data: XOR<JobSchemaUpdateWithoutClientInput, JobSchemaUncheckedUpdateWithoutClientInput>
  }

  export type JobSchemaUpdateManyWithWhereWithoutClientInput = {
    where: JobSchemaScalarWhereInput
    data: XOR<JobSchemaUpdateManyMutationInput, JobSchemaUncheckedUpdateManyWithoutClientInput>
  }

  export type JobSchemaScalarWhereInput = {
    AND?: JobSchemaScalarWhereInput | JobSchemaScalarWhereInput[]
    OR?: JobSchemaScalarWhereInput[]
    NOT?: JobSchemaScalarWhereInput | JobSchemaScalarWhereInput[]
    job_id?: IntFilter<"JobSchema"> | number
    clientid?: IntFilter<"JobSchema"> | number
    Job_titile?: StringFilter<"JobSchema"> | string
    Job_description?: StringFilter<"JobSchema"> | string
    Budget?: StringFilter<"JobSchema"> | string
    Timeline?: StringFilter<"JobSchema"> | string
  }

  export type ApplyJobUpsertWithWhereUniqueWithoutClientInput = {
    where: ApplyJobWhereUniqueInput
    update: XOR<ApplyJobUpdateWithoutClientInput, ApplyJobUncheckedUpdateWithoutClientInput>
    create: XOR<ApplyJobCreateWithoutClientInput, ApplyJobUncheckedCreateWithoutClientInput>
  }

  export type ApplyJobUpdateWithWhereUniqueWithoutClientInput = {
    where: ApplyJobWhereUniqueInput
    data: XOR<ApplyJobUpdateWithoutClientInput, ApplyJobUncheckedUpdateWithoutClientInput>
  }

  export type ApplyJobUpdateManyWithWhereWithoutClientInput = {
    where: ApplyJobScalarWhereInput
    data: XOR<ApplyJobUpdateManyMutationInput, ApplyJobUncheckedUpdateManyWithoutClientInput>
  }

  export type AcceptedProjectUpsertWithWhereUniqueWithoutClientInput = {
    where: AcceptedProjectWhereUniqueInput
    update: XOR<AcceptedProjectUpdateWithoutClientInput, AcceptedProjectUncheckedUpdateWithoutClientInput>
    create: XOR<AcceptedProjectCreateWithoutClientInput, AcceptedProjectUncheckedCreateWithoutClientInput>
  }

  export type AcceptedProjectUpdateWithWhereUniqueWithoutClientInput = {
    where: AcceptedProjectWhereUniqueInput
    data: XOR<AcceptedProjectUpdateWithoutClientInput, AcceptedProjectUncheckedUpdateWithoutClientInput>
  }

  export type AcceptedProjectUpdateManyWithWhereWithoutClientInput = {
    where: AcceptedProjectScalarWhereInput
    data: XOR<AcceptedProjectUpdateManyMutationInput, AcceptedProjectUncheckedUpdateManyWithoutClientInput>
  }

  export type CompletedPojectUpsertWithWhereUniqueWithoutClientInput = {
    where: CompletedPojectWhereUniqueInput
    update: XOR<CompletedPojectUpdateWithoutClientInput, CompletedPojectUncheckedUpdateWithoutClientInput>
    create: XOR<CompletedPojectCreateWithoutClientInput, CompletedPojectUncheckedCreateWithoutClientInput>
  }

  export type CompletedPojectUpdateWithWhereUniqueWithoutClientInput = {
    where: CompletedPojectWhereUniqueInput
    data: XOR<CompletedPojectUpdateWithoutClientInput, CompletedPojectUncheckedUpdateWithoutClientInput>
  }

  export type CompletedPojectUpdateManyWithWhereWithoutClientInput = {
    where: CompletedPojectScalarWhereInput
    data: XOR<CompletedPojectUpdateManyMutationInput, CompletedPojectUncheckedUpdateManyWithoutClientInput>
  }

  export type UserSchemaCreateWithoutProfileInput = {
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills?: UserSchemaCreateSkillsInput | string[]
    ApplyJob?: ApplyJobCreateNestedManyWithoutUserInput
    AcceptedProject?: AcceptedProjectCreateNestedManyWithoutUserInput
    CompletedPoject?: CompletedPojectCreateNestedManyWithoutUserInput
  }

  export type UserSchemaUncheckedCreateWithoutProfileInput = {
    user_id?: number
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills?: UserSchemaCreateSkillsInput | string[]
    ApplyJob?: ApplyJobUncheckedCreateNestedManyWithoutUserInput
    AcceptedProject?: AcceptedProjectUncheckedCreateNestedManyWithoutUserInput
    CompletedPoject?: CompletedPojectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserSchemaCreateOrConnectWithoutProfileInput = {
    where: UserSchemaWhereUniqueInput
    create: XOR<UserSchemaCreateWithoutProfileInput, UserSchemaUncheckedCreateWithoutProfileInput>
  }

  export type ApplyJobCreateWithoutProfileInput = {
    jobtitle: string
    budget?: string
    timeline?: string
    user: UserSchemaCreateNestedOneWithoutApplyJobInput
    client: ClientSchemaCreateNestedOneWithoutApplyJobsInput
    jobschema?: JobSchemaCreateNestedOneWithoutApplyJobInput
  }

  export type ApplyJobUncheckedCreateWithoutProfileInput = {
    applyjobid?: number
    clientid: number
    jobtitle: string
    budget?: string
    timeline?: string
    jobid?: number
  }

  export type ApplyJobCreateOrConnectWithoutProfileInput = {
    where: ApplyJobWhereUniqueInput
    create: XOR<ApplyJobCreateWithoutProfileInput, ApplyJobUncheckedCreateWithoutProfileInput>
  }

  export type ApplyJobCreateManyProfileInputEnvelope = {
    data: ApplyJobCreateManyProfileInput | ApplyJobCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserSchemaUpsertWithoutProfileInput = {
    update: XOR<UserSchemaUpdateWithoutProfileInput, UserSchemaUncheckedUpdateWithoutProfileInput>
    create: XOR<UserSchemaCreateWithoutProfileInput, UserSchemaUncheckedCreateWithoutProfileInput>
    where?: UserSchemaWhereInput
  }

  export type UserSchemaUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserSchemaWhereInput
    data: XOR<UserSchemaUpdateWithoutProfileInput, UserSchemaUncheckedUpdateWithoutProfileInput>
  }

  export type UserSchemaUpdateWithoutProfileInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
    ApplyJob?: ApplyJobUpdateManyWithoutUserNestedInput
    AcceptedProject?: AcceptedProjectUpdateManyWithoutUserNestedInput
    CompletedPoject?: CompletedPojectUpdateManyWithoutUserNestedInput
  }

  export type UserSchemaUncheckedUpdateWithoutProfileInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
    ApplyJob?: ApplyJobUncheckedUpdateManyWithoutUserNestedInput
    AcceptedProject?: AcceptedProjectUncheckedUpdateManyWithoutUserNestedInput
    CompletedPoject?: CompletedPojectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ApplyJobUpsertWithWhereUniqueWithoutProfileInput = {
    where: ApplyJobWhereUniqueInput
    update: XOR<ApplyJobUpdateWithoutProfileInput, ApplyJobUncheckedUpdateWithoutProfileInput>
    create: XOR<ApplyJobCreateWithoutProfileInput, ApplyJobUncheckedCreateWithoutProfileInput>
  }

  export type ApplyJobUpdateWithWhereUniqueWithoutProfileInput = {
    where: ApplyJobWhereUniqueInput
    data: XOR<ApplyJobUpdateWithoutProfileInput, ApplyJobUncheckedUpdateWithoutProfileInput>
  }

  export type ApplyJobUpdateManyWithWhereWithoutProfileInput = {
    where: ApplyJobScalarWhereInput
    data: XOR<ApplyJobUpdateManyMutationInput, ApplyJobUncheckedUpdateManyWithoutProfileInput>
  }

  export type ClientSchemaCreateWithoutJobschemaInput = {
    client_name: string
    Email: string
    Password: string
    Organization?: string | null
    ApplyJobs?: ApplyJobCreateNestedManyWithoutClientInput
    AcceptedProject?: AcceptedProjectCreateNestedManyWithoutClientInput
    CompletedPoject?: CompletedPojectCreateNestedManyWithoutClientInput
  }

  export type ClientSchemaUncheckedCreateWithoutJobschemaInput = {
    client_id?: number
    client_name: string
    Email: string
    Password: string
    Organization?: string | null
    ApplyJobs?: ApplyJobUncheckedCreateNestedManyWithoutClientInput
    AcceptedProject?: AcceptedProjectUncheckedCreateNestedManyWithoutClientInput
    CompletedPoject?: CompletedPojectUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientSchemaCreateOrConnectWithoutJobschemaInput = {
    where: ClientSchemaWhereUniqueInput
    create: XOR<ClientSchemaCreateWithoutJobschemaInput, ClientSchemaUncheckedCreateWithoutJobschemaInput>
  }

  export type ApplyJobCreateWithoutJobschemaInput = {
    jobtitle: string
    budget?: string
    timeline?: string
    user: UserSchemaCreateNestedOneWithoutApplyJobInput
    client: ClientSchemaCreateNestedOneWithoutApplyJobsInput
    profile: ProfileSchemaCreateNestedOneWithoutApplyJobsInput
  }

  export type ApplyJobUncheckedCreateWithoutJobschemaInput = {
    applyjobid?: number
    clientid: number
    userid: number
    jobtitle: string
    budget?: string
    timeline?: string
  }

  export type ApplyJobCreateOrConnectWithoutJobschemaInput = {
    where: ApplyJobWhereUniqueInput
    create: XOR<ApplyJobCreateWithoutJobschemaInput, ApplyJobUncheckedCreateWithoutJobschemaInput>
  }

  export type ApplyJobCreateManyJobschemaInputEnvelope = {
    data: ApplyJobCreateManyJobschemaInput | ApplyJobCreateManyJobschemaInput[]
    skipDuplicates?: boolean
  }

  export type ClientSchemaUpsertWithoutJobschemaInput = {
    update: XOR<ClientSchemaUpdateWithoutJobschemaInput, ClientSchemaUncheckedUpdateWithoutJobschemaInput>
    create: XOR<ClientSchemaCreateWithoutJobschemaInput, ClientSchemaUncheckedCreateWithoutJobschemaInput>
    where?: ClientSchemaWhereInput
  }

  export type ClientSchemaUpdateToOneWithWhereWithoutJobschemaInput = {
    where?: ClientSchemaWhereInput
    data: XOR<ClientSchemaUpdateWithoutJobschemaInput, ClientSchemaUncheckedUpdateWithoutJobschemaInput>
  }

  export type ClientSchemaUpdateWithoutJobschemaInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
    ApplyJobs?: ApplyJobUpdateManyWithoutClientNestedInput
    AcceptedProject?: AcceptedProjectUpdateManyWithoutClientNestedInput
    CompletedPoject?: CompletedPojectUpdateManyWithoutClientNestedInput
  }

  export type ClientSchemaUncheckedUpdateWithoutJobschemaInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
    ApplyJobs?: ApplyJobUncheckedUpdateManyWithoutClientNestedInput
    AcceptedProject?: AcceptedProjectUncheckedUpdateManyWithoutClientNestedInput
    CompletedPoject?: CompletedPojectUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ApplyJobUpsertWithWhereUniqueWithoutJobschemaInput = {
    where: ApplyJobWhereUniqueInput
    update: XOR<ApplyJobUpdateWithoutJobschemaInput, ApplyJobUncheckedUpdateWithoutJobschemaInput>
    create: XOR<ApplyJobCreateWithoutJobschemaInput, ApplyJobUncheckedCreateWithoutJobschemaInput>
  }

  export type ApplyJobUpdateWithWhereUniqueWithoutJobschemaInput = {
    where: ApplyJobWhereUniqueInput
    data: XOR<ApplyJobUpdateWithoutJobschemaInput, ApplyJobUncheckedUpdateWithoutJobschemaInput>
  }

  export type ApplyJobUpdateManyWithWhereWithoutJobschemaInput = {
    where: ApplyJobScalarWhereInput
    data: XOR<ApplyJobUpdateManyMutationInput, ApplyJobUncheckedUpdateManyWithoutJobschemaInput>
  }

  export type UserSchemaCreateWithoutApplyJobInput = {
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills?: UserSchemaCreateSkillsInput | string[]
    Profile?: ProfileSchemaCreateNestedOneWithoutUserInput
    AcceptedProject?: AcceptedProjectCreateNestedManyWithoutUserInput
    CompletedPoject?: CompletedPojectCreateNestedManyWithoutUserInput
  }

  export type UserSchemaUncheckedCreateWithoutApplyJobInput = {
    user_id?: number
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills?: UserSchemaCreateSkillsInput | string[]
    Profile?: ProfileSchemaUncheckedCreateNestedOneWithoutUserInput
    AcceptedProject?: AcceptedProjectUncheckedCreateNestedManyWithoutUserInput
    CompletedPoject?: CompletedPojectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserSchemaCreateOrConnectWithoutApplyJobInput = {
    where: UserSchemaWhereUniqueInput
    create: XOR<UserSchemaCreateWithoutApplyJobInput, UserSchemaUncheckedCreateWithoutApplyJobInput>
  }

  export type ClientSchemaCreateWithoutApplyJobsInput = {
    client_name: string
    Email: string
    Password: string
    Organization?: string | null
    jobschema?: JobSchemaCreateNestedManyWithoutClientInput
    AcceptedProject?: AcceptedProjectCreateNestedManyWithoutClientInput
    CompletedPoject?: CompletedPojectCreateNestedManyWithoutClientInput
  }

  export type ClientSchemaUncheckedCreateWithoutApplyJobsInput = {
    client_id?: number
    client_name: string
    Email: string
    Password: string
    Organization?: string | null
    jobschema?: JobSchemaUncheckedCreateNestedManyWithoutClientInput
    AcceptedProject?: AcceptedProjectUncheckedCreateNestedManyWithoutClientInput
    CompletedPoject?: CompletedPojectUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientSchemaCreateOrConnectWithoutApplyJobsInput = {
    where: ClientSchemaWhereUniqueInput
    create: XOR<ClientSchemaCreateWithoutApplyJobsInput, ClientSchemaUncheckedCreateWithoutApplyJobsInput>
  }

  export type ProfileSchemaCreateWithoutApplyJobsInput = {
    About: string
    ProjectLink?: ProfileSchemaCreateProjectLinkInput | string[]
    user: UserSchemaCreateNestedOneWithoutProfileInput
  }

  export type ProfileSchemaUncheckedCreateWithoutApplyJobsInput = {
    profile_id?: number
    About: string
    ProjectLink?: ProfileSchemaCreateProjectLinkInput | string[]
    userid: number
  }

  export type ProfileSchemaCreateOrConnectWithoutApplyJobsInput = {
    where: ProfileSchemaWhereUniqueInput
    create: XOR<ProfileSchemaCreateWithoutApplyJobsInput, ProfileSchemaUncheckedCreateWithoutApplyJobsInput>
  }

  export type JobSchemaCreateWithoutApplyJobInput = {
    Job_titile: string
    Job_description: string
    Budget: string
    Timeline: string
    client: ClientSchemaCreateNestedOneWithoutJobschemaInput
  }

  export type JobSchemaUncheckedCreateWithoutApplyJobInput = {
    job_id?: number
    clientid: number
    Job_titile: string
    Job_description: string
    Budget: string
    Timeline: string
  }

  export type JobSchemaCreateOrConnectWithoutApplyJobInput = {
    where: JobSchemaWhereUniqueInput
    create: XOR<JobSchemaCreateWithoutApplyJobInput, JobSchemaUncheckedCreateWithoutApplyJobInput>
  }

  export type UserSchemaUpsertWithoutApplyJobInput = {
    update: XOR<UserSchemaUpdateWithoutApplyJobInput, UserSchemaUncheckedUpdateWithoutApplyJobInput>
    create: XOR<UserSchemaCreateWithoutApplyJobInput, UserSchemaUncheckedCreateWithoutApplyJobInput>
    where?: UserSchemaWhereInput
  }

  export type UserSchemaUpdateToOneWithWhereWithoutApplyJobInput = {
    where?: UserSchemaWhereInput
    data: XOR<UserSchemaUpdateWithoutApplyJobInput, UserSchemaUncheckedUpdateWithoutApplyJobInput>
  }

  export type UserSchemaUpdateWithoutApplyJobInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
    Profile?: ProfileSchemaUpdateOneWithoutUserNestedInput
    AcceptedProject?: AcceptedProjectUpdateManyWithoutUserNestedInput
    CompletedPoject?: CompletedPojectUpdateManyWithoutUserNestedInput
  }

  export type UserSchemaUncheckedUpdateWithoutApplyJobInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
    Profile?: ProfileSchemaUncheckedUpdateOneWithoutUserNestedInput
    AcceptedProject?: AcceptedProjectUncheckedUpdateManyWithoutUserNestedInput
    CompletedPoject?: CompletedPojectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClientSchemaUpsertWithoutApplyJobsInput = {
    update: XOR<ClientSchemaUpdateWithoutApplyJobsInput, ClientSchemaUncheckedUpdateWithoutApplyJobsInput>
    create: XOR<ClientSchemaCreateWithoutApplyJobsInput, ClientSchemaUncheckedCreateWithoutApplyJobsInput>
    where?: ClientSchemaWhereInput
  }

  export type ClientSchemaUpdateToOneWithWhereWithoutApplyJobsInput = {
    where?: ClientSchemaWhereInput
    data: XOR<ClientSchemaUpdateWithoutApplyJobsInput, ClientSchemaUncheckedUpdateWithoutApplyJobsInput>
  }

  export type ClientSchemaUpdateWithoutApplyJobsInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
    jobschema?: JobSchemaUpdateManyWithoutClientNestedInput
    AcceptedProject?: AcceptedProjectUpdateManyWithoutClientNestedInput
    CompletedPoject?: CompletedPojectUpdateManyWithoutClientNestedInput
  }

  export type ClientSchemaUncheckedUpdateWithoutApplyJobsInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
    jobschema?: JobSchemaUncheckedUpdateManyWithoutClientNestedInput
    AcceptedProject?: AcceptedProjectUncheckedUpdateManyWithoutClientNestedInput
    CompletedPoject?: CompletedPojectUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ProfileSchemaUpsertWithoutApplyJobsInput = {
    update: XOR<ProfileSchemaUpdateWithoutApplyJobsInput, ProfileSchemaUncheckedUpdateWithoutApplyJobsInput>
    create: XOR<ProfileSchemaCreateWithoutApplyJobsInput, ProfileSchemaUncheckedCreateWithoutApplyJobsInput>
    where?: ProfileSchemaWhereInput
  }

  export type ProfileSchemaUpdateToOneWithWhereWithoutApplyJobsInput = {
    where?: ProfileSchemaWhereInput
    data: XOR<ProfileSchemaUpdateWithoutApplyJobsInput, ProfileSchemaUncheckedUpdateWithoutApplyJobsInput>
  }

  export type ProfileSchemaUpdateWithoutApplyJobsInput = {
    About?: StringFieldUpdateOperationsInput | string
    ProjectLink?: ProfileSchemaUpdateProjectLinkInput | string[]
    user?: UserSchemaUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileSchemaUncheckedUpdateWithoutApplyJobsInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    About?: StringFieldUpdateOperationsInput | string
    ProjectLink?: ProfileSchemaUpdateProjectLinkInput | string[]
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type JobSchemaUpsertWithoutApplyJobInput = {
    update: XOR<JobSchemaUpdateWithoutApplyJobInput, JobSchemaUncheckedUpdateWithoutApplyJobInput>
    create: XOR<JobSchemaCreateWithoutApplyJobInput, JobSchemaUncheckedCreateWithoutApplyJobInput>
    where?: JobSchemaWhereInput
  }

  export type JobSchemaUpdateToOneWithWhereWithoutApplyJobInput = {
    where?: JobSchemaWhereInput
    data: XOR<JobSchemaUpdateWithoutApplyJobInput, JobSchemaUncheckedUpdateWithoutApplyJobInput>
  }

  export type JobSchemaUpdateWithoutApplyJobInput = {
    Job_titile?: StringFieldUpdateOperationsInput | string
    Job_description?: StringFieldUpdateOperationsInput | string
    Budget?: StringFieldUpdateOperationsInput | string
    Timeline?: StringFieldUpdateOperationsInput | string
    client?: ClientSchemaUpdateOneRequiredWithoutJobschemaNestedInput
  }

  export type JobSchemaUncheckedUpdateWithoutApplyJobInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    Job_titile?: StringFieldUpdateOperationsInput | string
    Job_description?: StringFieldUpdateOperationsInput | string
    Budget?: StringFieldUpdateOperationsInput | string
    Timeline?: StringFieldUpdateOperationsInput | string
  }

  export type ClientSchemaCreateWithoutAcceptedProjectInput = {
    client_name: string
    Email: string
    Password: string
    Organization?: string | null
    jobschema?: JobSchemaCreateNestedManyWithoutClientInput
    ApplyJobs?: ApplyJobCreateNestedManyWithoutClientInput
    CompletedPoject?: CompletedPojectCreateNestedManyWithoutClientInput
  }

  export type ClientSchemaUncheckedCreateWithoutAcceptedProjectInput = {
    client_id?: number
    client_name: string
    Email: string
    Password: string
    Organization?: string | null
    jobschema?: JobSchemaUncheckedCreateNestedManyWithoutClientInput
    ApplyJobs?: ApplyJobUncheckedCreateNestedManyWithoutClientInput
    CompletedPoject?: CompletedPojectUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientSchemaCreateOrConnectWithoutAcceptedProjectInput = {
    where: ClientSchemaWhereUniqueInput
    create: XOR<ClientSchemaCreateWithoutAcceptedProjectInput, ClientSchemaUncheckedCreateWithoutAcceptedProjectInput>
  }

  export type UserSchemaCreateWithoutAcceptedProjectInput = {
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills?: UserSchemaCreateSkillsInput | string[]
    Profile?: ProfileSchemaCreateNestedOneWithoutUserInput
    ApplyJob?: ApplyJobCreateNestedManyWithoutUserInput
    CompletedPoject?: CompletedPojectCreateNestedManyWithoutUserInput
  }

  export type UserSchemaUncheckedCreateWithoutAcceptedProjectInput = {
    user_id?: number
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills?: UserSchemaCreateSkillsInput | string[]
    Profile?: ProfileSchemaUncheckedCreateNestedOneWithoutUserInput
    ApplyJob?: ApplyJobUncheckedCreateNestedManyWithoutUserInput
    CompletedPoject?: CompletedPojectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserSchemaCreateOrConnectWithoutAcceptedProjectInput = {
    where: UserSchemaWhereUniqueInput
    create: XOR<UserSchemaCreateWithoutAcceptedProjectInput, UserSchemaUncheckedCreateWithoutAcceptedProjectInput>
  }

  export type ClientSchemaUpsertWithoutAcceptedProjectInput = {
    update: XOR<ClientSchemaUpdateWithoutAcceptedProjectInput, ClientSchemaUncheckedUpdateWithoutAcceptedProjectInput>
    create: XOR<ClientSchemaCreateWithoutAcceptedProjectInput, ClientSchemaUncheckedCreateWithoutAcceptedProjectInput>
    where?: ClientSchemaWhereInput
  }

  export type ClientSchemaUpdateToOneWithWhereWithoutAcceptedProjectInput = {
    where?: ClientSchemaWhereInput
    data: XOR<ClientSchemaUpdateWithoutAcceptedProjectInput, ClientSchemaUncheckedUpdateWithoutAcceptedProjectInput>
  }

  export type ClientSchemaUpdateWithoutAcceptedProjectInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
    jobschema?: JobSchemaUpdateManyWithoutClientNestedInput
    ApplyJobs?: ApplyJobUpdateManyWithoutClientNestedInput
    CompletedPoject?: CompletedPojectUpdateManyWithoutClientNestedInput
  }

  export type ClientSchemaUncheckedUpdateWithoutAcceptedProjectInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
    jobschema?: JobSchemaUncheckedUpdateManyWithoutClientNestedInput
    ApplyJobs?: ApplyJobUncheckedUpdateManyWithoutClientNestedInput
    CompletedPoject?: CompletedPojectUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserSchemaUpsertWithoutAcceptedProjectInput = {
    update: XOR<UserSchemaUpdateWithoutAcceptedProjectInput, UserSchemaUncheckedUpdateWithoutAcceptedProjectInput>
    create: XOR<UserSchemaCreateWithoutAcceptedProjectInput, UserSchemaUncheckedCreateWithoutAcceptedProjectInput>
    where?: UserSchemaWhereInput
  }

  export type UserSchemaUpdateToOneWithWhereWithoutAcceptedProjectInput = {
    where?: UserSchemaWhereInput
    data: XOR<UserSchemaUpdateWithoutAcceptedProjectInput, UserSchemaUncheckedUpdateWithoutAcceptedProjectInput>
  }

  export type UserSchemaUpdateWithoutAcceptedProjectInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
    Profile?: ProfileSchemaUpdateOneWithoutUserNestedInput
    ApplyJob?: ApplyJobUpdateManyWithoutUserNestedInput
    CompletedPoject?: CompletedPojectUpdateManyWithoutUserNestedInput
  }

  export type UserSchemaUncheckedUpdateWithoutAcceptedProjectInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
    Profile?: ProfileSchemaUncheckedUpdateOneWithoutUserNestedInput
    ApplyJob?: ApplyJobUncheckedUpdateManyWithoutUserNestedInput
    CompletedPoject?: CompletedPojectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClientSchemaCreateWithoutCompletedPojectInput = {
    client_name: string
    Email: string
    Password: string
    Organization?: string | null
    jobschema?: JobSchemaCreateNestedManyWithoutClientInput
    ApplyJobs?: ApplyJobCreateNestedManyWithoutClientInput
    AcceptedProject?: AcceptedProjectCreateNestedManyWithoutClientInput
  }

  export type ClientSchemaUncheckedCreateWithoutCompletedPojectInput = {
    client_id?: number
    client_name: string
    Email: string
    Password: string
    Organization?: string | null
    jobschema?: JobSchemaUncheckedCreateNestedManyWithoutClientInput
    ApplyJobs?: ApplyJobUncheckedCreateNestedManyWithoutClientInput
    AcceptedProject?: AcceptedProjectUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientSchemaCreateOrConnectWithoutCompletedPojectInput = {
    where: ClientSchemaWhereUniqueInput
    create: XOR<ClientSchemaCreateWithoutCompletedPojectInput, ClientSchemaUncheckedCreateWithoutCompletedPojectInput>
  }

  export type UserSchemaCreateWithoutCompletedPojectInput = {
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills?: UserSchemaCreateSkillsInput | string[]
    Profile?: ProfileSchemaCreateNestedOneWithoutUserInput
    ApplyJob?: ApplyJobCreateNestedManyWithoutUserInput
    AcceptedProject?: AcceptedProjectCreateNestedManyWithoutUserInput
  }

  export type UserSchemaUncheckedCreateWithoutCompletedPojectInput = {
    user_id?: number
    Name: string
    Email: string
    Password: string
    Experience: number
    Rating: number
    Skills?: UserSchemaCreateSkillsInput | string[]
    Profile?: ProfileSchemaUncheckedCreateNestedOneWithoutUserInput
    ApplyJob?: ApplyJobUncheckedCreateNestedManyWithoutUserInput
    AcceptedProject?: AcceptedProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserSchemaCreateOrConnectWithoutCompletedPojectInput = {
    where: UserSchemaWhereUniqueInput
    create: XOR<UserSchemaCreateWithoutCompletedPojectInput, UserSchemaUncheckedCreateWithoutCompletedPojectInput>
  }

  export type ClientSchemaUpsertWithoutCompletedPojectInput = {
    update: XOR<ClientSchemaUpdateWithoutCompletedPojectInput, ClientSchemaUncheckedUpdateWithoutCompletedPojectInput>
    create: XOR<ClientSchemaCreateWithoutCompletedPojectInput, ClientSchemaUncheckedCreateWithoutCompletedPojectInput>
    where?: ClientSchemaWhereInput
  }

  export type ClientSchemaUpdateToOneWithWhereWithoutCompletedPojectInput = {
    where?: ClientSchemaWhereInput
    data: XOR<ClientSchemaUpdateWithoutCompletedPojectInput, ClientSchemaUncheckedUpdateWithoutCompletedPojectInput>
  }

  export type ClientSchemaUpdateWithoutCompletedPojectInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
    jobschema?: JobSchemaUpdateManyWithoutClientNestedInput
    ApplyJobs?: ApplyJobUpdateManyWithoutClientNestedInput
    AcceptedProject?: AcceptedProjectUpdateManyWithoutClientNestedInput
  }

  export type ClientSchemaUncheckedUpdateWithoutCompletedPojectInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Organization?: NullableStringFieldUpdateOperationsInput | string | null
    jobschema?: JobSchemaUncheckedUpdateManyWithoutClientNestedInput
    ApplyJobs?: ApplyJobUncheckedUpdateManyWithoutClientNestedInput
    AcceptedProject?: AcceptedProjectUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserSchemaUpsertWithoutCompletedPojectInput = {
    update: XOR<UserSchemaUpdateWithoutCompletedPojectInput, UserSchemaUncheckedUpdateWithoutCompletedPojectInput>
    create: XOR<UserSchemaCreateWithoutCompletedPojectInput, UserSchemaUncheckedCreateWithoutCompletedPojectInput>
    where?: UserSchemaWhereInput
  }

  export type UserSchemaUpdateToOneWithWhereWithoutCompletedPojectInput = {
    where?: UserSchemaWhereInput
    data: XOR<UserSchemaUpdateWithoutCompletedPojectInput, UserSchemaUncheckedUpdateWithoutCompletedPojectInput>
  }

  export type UserSchemaUpdateWithoutCompletedPojectInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
    Profile?: ProfileSchemaUpdateOneWithoutUserNestedInput
    ApplyJob?: ApplyJobUpdateManyWithoutUserNestedInput
    AcceptedProject?: AcceptedProjectUpdateManyWithoutUserNestedInput
  }

  export type UserSchemaUncheckedUpdateWithoutCompletedPojectInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Experience?: IntFieldUpdateOperationsInput | number
    Rating?: IntFieldUpdateOperationsInput | number
    Skills?: UserSchemaUpdateSkillsInput | string[]
    Profile?: ProfileSchemaUncheckedUpdateOneWithoutUserNestedInput
    ApplyJob?: ApplyJobUncheckedUpdateManyWithoutUserNestedInput
    AcceptedProject?: AcceptedProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ApplyJobCreateManyUserInput = {
    applyjobid?: number
    clientid: number
    jobtitle: string
    budget?: string
    timeline?: string
    jobid?: number
  }

  export type AcceptedProjectCreateManyUserInput = {
    aaplyproject?: number
    client_id: number
    project_title: string
    budget: string
    timeline: string
  }

  export type CompletedPojectCreateManyUserInput = {
    completedprojectid?: number
    client_id: number
    project_title: string
    budget: string
    timeline: string
  }

  export type ApplyJobUpdateWithoutUserInput = {
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    client?: ClientSchemaUpdateOneRequiredWithoutApplyJobsNestedInput
    profile?: ProfileSchemaUpdateOneRequiredWithoutApplyJobsNestedInput
    jobschema?: JobSchemaUpdateOneRequiredWithoutApplyJobNestedInput
  }

  export type ApplyJobUncheckedUpdateWithoutUserInput = {
    applyjobid?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    jobid?: IntFieldUpdateOperationsInput | number
  }

  export type ApplyJobUncheckedUpdateManyWithoutUserInput = {
    applyjobid?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    jobid?: IntFieldUpdateOperationsInput | number
  }

  export type AcceptedProjectUpdateWithoutUserInput = {
    project_title?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    client?: ClientSchemaUpdateOneRequiredWithoutAcceptedProjectNestedInput
  }

  export type AcceptedProjectUncheckedUpdateWithoutUserInput = {
    aaplyproject?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    project_title?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type AcceptedProjectUncheckedUpdateManyWithoutUserInput = {
    aaplyproject?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    project_title?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedPojectUpdateWithoutUserInput = {
    project_title?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    client?: ClientSchemaUpdateOneRequiredWithoutCompletedPojectNestedInput
  }

  export type CompletedPojectUncheckedUpdateWithoutUserInput = {
    completedprojectid?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    project_title?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedPojectUncheckedUpdateManyWithoutUserInput = {
    completedprojectid?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    project_title?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type JobSchemaCreateManyClientInput = {
    job_id?: number
    Job_titile: string
    Job_description: string
    Budget: string
    Timeline: string
  }

  export type ApplyJobCreateManyClientInput = {
    applyjobid?: number
    userid: number
    jobtitle: string
    budget?: string
    timeline?: string
    jobid?: number
  }

  export type AcceptedProjectCreateManyClientInput = {
    aaplyproject?: number
    userid: number
    project_title: string
    budget: string
    timeline: string
  }

  export type CompletedPojectCreateManyClientInput = {
    completedprojectid?: number
    userid: number
    project_title: string
    budget: string
    timeline: string
  }

  export type JobSchemaUpdateWithoutClientInput = {
    Job_titile?: StringFieldUpdateOperationsInput | string
    Job_description?: StringFieldUpdateOperationsInput | string
    Budget?: StringFieldUpdateOperationsInput | string
    Timeline?: StringFieldUpdateOperationsInput | string
    applyJob?: ApplyJobUpdateManyWithoutJobschemaNestedInput
  }

  export type JobSchemaUncheckedUpdateWithoutClientInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    Job_titile?: StringFieldUpdateOperationsInput | string
    Job_description?: StringFieldUpdateOperationsInput | string
    Budget?: StringFieldUpdateOperationsInput | string
    Timeline?: StringFieldUpdateOperationsInput | string
    applyJob?: ApplyJobUncheckedUpdateManyWithoutJobschemaNestedInput
  }

  export type JobSchemaUncheckedUpdateManyWithoutClientInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    Job_titile?: StringFieldUpdateOperationsInput | string
    Job_description?: StringFieldUpdateOperationsInput | string
    Budget?: StringFieldUpdateOperationsInput | string
    Timeline?: StringFieldUpdateOperationsInput | string
  }

  export type ApplyJobUpdateWithoutClientInput = {
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    user?: UserSchemaUpdateOneRequiredWithoutApplyJobNestedInput
    profile?: ProfileSchemaUpdateOneRequiredWithoutApplyJobsNestedInput
    jobschema?: JobSchemaUpdateOneRequiredWithoutApplyJobNestedInput
  }

  export type ApplyJobUncheckedUpdateWithoutClientInput = {
    applyjobid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    jobid?: IntFieldUpdateOperationsInput | number
  }

  export type ApplyJobUncheckedUpdateManyWithoutClientInput = {
    applyjobid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    jobid?: IntFieldUpdateOperationsInput | number
  }

  export type AcceptedProjectUpdateWithoutClientInput = {
    project_title?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    user?: UserSchemaUpdateOneRequiredWithoutAcceptedProjectNestedInput
  }

  export type AcceptedProjectUncheckedUpdateWithoutClientInput = {
    aaplyproject?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    project_title?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type AcceptedProjectUncheckedUpdateManyWithoutClientInput = {
    aaplyproject?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    project_title?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedPojectUpdateWithoutClientInput = {
    project_title?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    user?: UserSchemaUpdateOneRequiredWithoutCompletedPojectNestedInput
  }

  export type CompletedPojectUncheckedUpdateWithoutClientInput = {
    completedprojectid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    project_title?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedPojectUncheckedUpdateManyWithoutClientInput = {
    completedprojectid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    project_title?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type ApplyJobCreateManyProfileInput = {
    applyjobid?: number
    clientid: number
    jobtitle: string
    budget?: string
    timeline?: string
    jobid?: number
  }

  export type ApplyJobUpdateWithoutProfileInput = {
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    user?: UserSchemaUpdateOneRequiredWithoutApplyJobNestedInput
    client?: ClientSchemaUpdateOneRequiredWithoutApplyJobsNestedInput
    jobschema?: JobSchemaUpdateOneRequiredWithoutApplyJobNestedInput
  }

  export type ApplyJobUncheckedUpdateWithoutProfileInput = {
    applyjobid?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    jobid?: IntFieldUpdateOperationsInput | number
  }

  export type ApplyJobUncheckedUpdateManyWithoutProfileInput = {
    applyjobid?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    jobid?: IntFieldUpdateOperationsInput | number
  }

  export type ApplyJobCreateManyJobschemaInput = {
    applyjobid?: number
    clientid: number
    userid: number
    jobtitle: string
    budget?: string
    timeline?: string
  }

  export type ApplyJobUpdateWithoutJobschemaInput = {
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    user?: UserSchemaUpdateOneRequiredWithoutApplyJobNestedInput
    client?: ClientSchemaUpdateOneRequiredWithoutApplyJobsNestedInput
    profile?: ProfileSchemaUpdateOneRequiredWithoutApplyJobsNestedInput
  }

  export type ApplyJobUncheckedUpdateWithoutJobschemaInput = {
    applyjobid?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }

  export type ApplyJobUncheckedUpdateManyWithoutJobschemaInput = {
    applyjobid?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    jobtitle?: StringFieldUpdateOperationsInput | string
    budget?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}